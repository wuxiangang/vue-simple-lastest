'use strict'
const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: 'production',
  entry: {
    vendor: ['@babel/polyfill']
  },
  output: {
    path: path.join(__dirname, '../static/js'), 
    filename: '[name].dll.js',
    library: '[name]_library' 
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '../static', '[name]-manifest.json'),
      name: '[name]_library', 
      context: __dirname
    })
  ]
};