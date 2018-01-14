const webpack = require('webpack')
const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  devtool: 'source-map',
  module: {
    rules: [
      // load css files
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
              }
            }
          ]
        })
      },
      // load scss (sass) files in app (with css module enabled)
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              // resolve imported css
              loader: 'css-loader',
              options: {
                modules: true,
                minimize: true,
              }
            },
            {
              // compiles Sass to CSS
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            },
          ]
        })
      },
    ]
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new ExtractTextPlugin('styles.css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.SENTRY_DNS': JSON.stringify('https://1f4bf702246d45d28e4f0d24d17832ca@sentry.io/264486'),
    })
  ]
})