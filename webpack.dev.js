const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')

module.exports = merge(common, {
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:3000'
    },
    port: 3001
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      // load css files
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      // load scss (sass) files in app (with css module enabled)
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            // Adds CSS to the DOM by injecting a <style> tag
            loader: 'style-loader',
          },
          {
            // resolve imported css
            loader: 'css-loader',
            options: { modules: true }
          },
          {
            // compiles Sass to CSS
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          },
        ]
      },
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
  ]
})