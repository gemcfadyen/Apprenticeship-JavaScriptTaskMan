var path = require('path');
var webpack = require('webpack');
console.log("HERE" + __dirname);

module.exports = {
  entry: './js/LoadHandlers',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.bundle.js'
  },
  module: {
    loaders: [
    {
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }
    ]
  },
  stats: {
    colors: true
  },
  plugins:[
    new webpack.ProvidePlugin({
      $: "jquery",
    })
  ],
  devtool: 'source-map'
};
