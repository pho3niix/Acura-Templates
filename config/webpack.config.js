const path = require('path');

module.exports = {
  mode: 'production',
  entry: './js/main.js',
  output: {
    filename: '../../src/js/mainBundle.js',
    path: path.resolve(__dirname, './js')
  }
}