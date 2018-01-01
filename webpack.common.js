const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
const outputDir = path.resolve(__dirname, 'build')

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: outputDir,
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new CleanWebpackPlugin([outputDir]),
    // Automatically generate an HTML5 file for you that includes all your webpack bundles
    new HtmlWebpackPlugin({
      title: 'React Blog',
      favicon: './src/favicon.ico',
      template: './src/index.html'
    }),
    // Automatically load jquery instead of having to import or require them everywhere
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    // Fix import momentjs library
    new webpack.IgnorePlugin(/\.\/locale$/),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    // Tell webpack what directories should be searched when resolving modules.
    modules: [
      'node_modules'
    ]
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
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
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ],
  },
}