# test-repo

** To start project use "npm run build". **

## Steps to start a project:
    1. Run the command "npm init". (created file 'package.json')\n
    2. copy `devdependences and scripts` in the package.json.\n
    3. Run the command "npm i". (created folder 'node_modules')\n
    4. Run the command "npm run start".\n

## copy materials
```
"devDependencies": {
    "css-loader": "^3.2.0",
    "file-loader": "^4.2.0",
    "html-webpack-plugin": "^3.2.0",
    "style-loader": "^1.0.0",
    "webpack": "^4.41.2",
    "webpack-cli": "^3.3.10",
    "webpack-dev-server": "^3.9.0"
  },
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --config webpack.config.js",
    "watch": "webpack --config webpack.config.js --watch",
    "start": "webpack-dev-server --config webpack.config.js --open"
  },
```