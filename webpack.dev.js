const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    proxy: {
      "/api": "http://localhost:3000"
    }
  },
  devtool: 'inline-source-map',
});