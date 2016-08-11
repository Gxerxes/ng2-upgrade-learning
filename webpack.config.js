var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/main',
    vendor: './src/vendor',
    polyfills: './src/polyfills'
  },
  output: {
    path: './dist',
    filename: '[name].bundle.js',
    publicPath: '/dist/'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts',
        exclude: 'node_modules'
      },
      {
        test: /\.html$/,
        loader: 'raw',
        exclude: './src/index.html'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'polyfills']
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};