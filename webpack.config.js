const path = require('path');

const isDevelopment = process.env.NODE_ENV;

module.exports = {
  mode: isDevelopment === 'development' ? 'development' : 'production',
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname),
  },
  devtool: isDevelopment === 'development' ? 'eval-source-map' : 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  watch: isDevelopment === 'development',
};
