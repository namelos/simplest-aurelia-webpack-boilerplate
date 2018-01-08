const path = require('path')
const { AureliaPlugin } = require('aurelia-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  devtool: 'cheap-module-eval-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/static/'
  },
  module: {
    rules: [
      { test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/ },
      { test: /\.html$/, use: ['html-loader'] }
    ]
  },
  plugins: [new AureliaPlugin()]
}