# React Blog

## Introduction

This is a simple demo for common usecases of [Webpack](https://webpack.js.org)

## Features

### Webpack

This project perform the following tasks:

- Basic setup
- Create a typical webpack configuration file
- Create a build shortcut using npm script
- Load Css using css-loader and style-loader
- Load Images\Fonts using file-loader
- Create file `index.html` with HtmlWebpackPlugin
- Cleanup the destination folder before each build
- Use source maps for easier trackdown errors and warnings
- Automatically rebuild using watch mode
- Automatically refresh browser on file change with `webpack-dev-server`

### Api server (ExpressJs)

## Install

``` bash
npm install -g nodemon
```

## Import database scripts
```
mongoimport --host localhost:27017 --db rblog --collection common.users --file data/users.json --jsonArray --drop
mongoimport --host localhost:27017 --db rblog --collection blog.posts --file data/posts.json --jsonArray --drop
```

## Export database scripts
```
mongoexport --host localhost:27017 --db rblog -c common.users --out data/users.json --jsonArray --pretty
mongoexport --host localhost:27017 --db rblog -c blog.posts --out data/posts.json --jsonArray --pretty
```
