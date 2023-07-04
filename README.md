Шоу: https://r0-32.github.io/shader-art-page-one-react/
Реп: https://github.com/R0-32/shader-art-page-one-react

Использовал: гпт и короткий ролик на ю2б подготовленный с помощью нейронки.

Результат: Одна страничка на реакт с вложенным кодом на   webgl, генерирующая 2д анимацию.

Из интересного:
Чтобы поставить реакт и ноду на Дебиан 11. Использовал не официальный сайт. И на всякий установил opengl шейдеры. Рецепт вышел такой:
sudo apt update
sudo apt upgrade
sudo apt install build-essential curl
curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash -
sudo apt-get install -y nodejs
npm install gl-react@^4.0.0 gl-react-dom@^4.0.0
npm install --save-dev glslify glslify-loader
sudo npm install -g create-react-app
npx create-react-app shader-project

а для того чтобы оно отображалось на гхпейджес
// package.json
"homepage": "https://R0-32.github.io/shader-art-page-one-react"
// в раздел scripts:
"predeploy": "npm run build",
"deploy": "gh-pages -d build"

// terminal
npm install --save-dev gh-pages
git branch gh-pages
git checkout gh-pages
npm run deploy

# Shader Art Gallery

Этот проект представляет собой интерактивную галерею, использующую WebGL и шейдеры для создания впечатляющих визуальных эффектов. Каждое изображение в галерее генерируется с помощью фрагментного шейдера, что позволяет создавать уникальные и динамичные композиции.

## Как это работает

Проект использует React и WebGL для отображения и обработки шейдеров. В основе галереи лежит компонент Shader, который отображает канвас и инициализирует WebGL контекст. Шейдеры состоят из вершинного и фрагментного шейдеров, которые определяют визуальный стиль и поведение изображения.

## Использование

1. Убедитесь, что на вашем компьютере установлен Node.js.
2. Склонируйте репозиторий и перейдите в его директорию.
3. Установите зависимости, выполнив команду `npm install`.
4. Запустите проект, выполнив команду `npm start`.
5. Откройте веб-браузер и перейдите по адресу `http://localhost:3000`, чтобы увидеть галерею с шейдерами.

## Дополнительные настройки

- В файле `Shader.js` вы можете изменять шейдерный код, чтобы создавать новые визуальные эффекты. Помните, что изменение шейдеров может потребовать знания языка GLSL (OpenGL Shading Language).

## Вклад

Вы можете вносить свои вклады в проект, создавая новые шейдеры, улучшая существующий код или добавляя новые функции. Пожалуйста, прочтите [CONTRIBUTING.md](CONTRIBUTING.md) для получения дополнительной информации о внесении вклада в проект.

## Лицензия

Этот проект лицензирован под лицензией [MIT](LICENSE).



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# shader-art-page-one-react
