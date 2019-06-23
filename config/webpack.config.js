const path = require('path');

module.exports = {
  mode: 'production',
  entry: './js/events/main.js',
  output: {
    filename: 'mainBundle.js',
    path: path.resolve(__dirname, './js')
  }
}