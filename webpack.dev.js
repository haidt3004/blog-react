const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    proxy: {
      "/api": "http://localhost:1000"
    }
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.NamedModulesPlugin(),
  ]
});