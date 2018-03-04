const webpack = require('webpack')
const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  devtool: 'source-map',
  module: {
    rules: [
      // Extract css from the bundle into a separate file.
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
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),

    // Extract css from the bundle into a separate file.
    new ExtractTextPlugin('styles.css'),

    // define environment variables for production
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.SENTRY_DNS': JSON.stringify('https://1f4bf702246d45d28e4f0d24d17832ca@sentry.io/264486'),
    })
  ]
})