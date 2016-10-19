var path = require('path');
var APP          = path.join(__dirname, 'src/'),
    NODE_MODULES = path.join(__dirname, 'node_modules/');


var config = {
  entry: './app',
  output: {
    path: './dist',
    filename: 'app.js'
  },
  resolve: {
    root: [APP, NODE_MODULES]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel']
      }
    ]
  }
}

module.exports = config;
