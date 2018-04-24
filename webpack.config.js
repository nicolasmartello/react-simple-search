const webpack = require('webpack');
const path = require('path');
const config = require('config');
const fs = require('fs');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'src/app');
const compileConfigPath = `${BUILD_DIR}/config.json`;

fs.writeFileSync(path.resolve(__dirname, compileConfigPath), JSON.stringify(config));

module.exports = {
  entry: [
    'react-hot-loader/patch',
    `${APP_DIR}/index.jsx`,
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        enforce: 'pre',
        test: /\.scss/,
        use: 'import-glob-loader',
      },
      {
        test: /(\.css)$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoader: 1,
              modules: false,
              camelCase: true,
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  output: {
    path: BUILD_DIR,
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: BUILD_DIR,
    hot: true,
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      settings: compileConfigPath,
    },
  },
};
