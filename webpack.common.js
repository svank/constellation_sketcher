const path = require('path');

module.exports = {
  entry: './src/constellation_sketcher.js',
  output: {
    filename: 'constellation_sketcher.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'var',
    library: 'ConstellationSketcher',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
};