import React, { useRef, useEffect } from 'react';
import './Shader.css';

const Shader = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext('webgl');

    const vertexShaderCode = `
      attribute vec2 a_position;

      void main() {
        gl_Position = vec4(a_position, 0, 1);
      }
    `;

    const shaderCode = `
      precision mediump float;

      uniform vec3 iResolution;
      uniform float iTime;

      vec3 palette( float t ) {
        vec3 a = vec3(0.5, 0.5, 0.5);
        vec3 b = vec3(0.5, 0.5, 0.5);
        vec3 c = vec3(1.0, 1.0, 1.0);
        vec3 d = vec3(0.263,0.416,0.557);
        return a + b*cos( 6.28318*(c*t+d) );
      }

      void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
        vec2 uv = (fragCoord * 2.0 - iResolution.xy) / iResolution.y;
        vec2 uv0 = uv;
        vec3 finalColor = vec3(0.0);

        for (float i = 0.0; i < 4.0; i++) {
          uv = fract(uv * 1.5) - 0.5;

          float d = length(uv) * exp(-length(uv0));

          vec3 col = palette(length(uv0) + i*.4 + iTime*.4);

          d = sin(d*8. + iTime)/8.;
          d = abs(d);

          d = pow(0.01 / d, 1.2);

          finalColor += col * d;
        }

        fragColor = vec4(finalColor, 1.0);
      }

      void main() {
        mainImage(gl_FragColor, gl_FragCoord.xy);
      }
    `;

    const shaderProgram = gl.createProgram();
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderCode);
    gl.compileShader(vertexShader);
    gl.attachShader(shaderProgram, vertexShader);

    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, shaderCode);
    gl.compileShader(fragmentShader);
    gl.attachShader(shaderProgram, fragmentShader);

    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    // Создание буфера вершинных данных
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    // Запись вершинных данных
    const positions = [
      -1, -1,
      1, -1,
      -1, 1,
      -1, 1,
      1, -1,
      1, 1,
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    // Указание расположения вершинных данных
    const positionLocation = gl.getAttribLocation(shaderProgram, 'a_position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const resolutionLocation = gl.getUniformLocation(shaderProgram, 'iResolution');
    const timeLocation = gl.getUniformLocation(shaderProgram, 'iTime');

    const render = () => {
      gl.uniform3f(resolutionLocation, canvas.width, canvas.height, 1.0);
      gl.uniform1f(timeLocation, performance.now() / 1000);

      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      // Измените размеры холста на размеры окна браузера
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      requestAnimationFrame(render);
    };

    render();
  }, []);

  return <canvas ref={canvasRef} className="shader-canvas" />;
};

export default Shader;
