const path = require('path');

module.exports = {
  mode: 'production',
  entry: './resources/index.js',
  output: {
    filename: 'vendor-bundle.js',
    path: path.resolve(__dirname)
  }
}
