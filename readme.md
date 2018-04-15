# React setup

Setting up React development environment.

## Installation

Instruction for setting up environment for React development.

* [Initialization](#initialization)
* [React](#react)
* [Webpack](#webpack)
* [Babel](#babel)
* [ESLint](#eslint)
* [ESLint integration in VSC](#eslint-integration-in-vsc)
* [Webpack configuration](#webpack-configuration)

## Initialization

Initialize npm, git and setup .gitignore

```
mkdir my-react-app
cd my-react-app
npm init
git init 
```

Add `.gitignore` file and add `node_modules` directory. 

## React

Install react and react-dom.

```
npm install --save react react-dom 
```

## Webpack

Install webpack and web pack development server.

```
npm install --save-dev webpack 
npm install --save-dev webpack-dev-server
```


## Babel

Install babel, babel loaders and plugins (as dev dependencies).

```
npm install --save-dev babel-cli babel-core babel-loader babel-preset-env 
npm install --save-dev eslint-loader babel-preset-react
npm install --save-dev html-webpack-plugin html-loader style-loader css-loader
```

`babel-cli` babel cli\
`babel-core` babel compiler\
`babel-loader` babel loader for webpack\
`babel-preset-env` automatically determining the Babel plugins and polyfills you need based on your targeted browser or runtime environments\
`babel-preset-react` babel preset for react\
`html-loader` and `html-webpack-plugin` to handle html (auto add script file in the template)\
`style-loader` and `css-loader` handle css files

## ESLint

```
npm install eslint -g
npm install eslint-plugin-react eslint-loader --save-dev
```

`eslint` linting tool\
`eslint-plugin-react` react specific linting\
`eslint-loader` eslint loader for webpack

## ESLint integration in VSC

Install ESlint plugin. It will use .eslintrc configuration.

## Webpack configuration

```
in progress...
```