const path = require('path');

const config = {
  common: {
    entry: {
      index: './build/js/index.js',
      'editor.worker': 'monaco-editor/esm/vs/editor/editor.worker.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          enforce: 'pre',
          use: ['source-map-loader'],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.ttf$/,
          type: 'asset/resource',
        },
      ],
    },
    output: {
      filename: '[id].bundle.js',
      path: path.join(__dirname, 'build', 'web'),
      publicPath: '/',
    },
    devServer: {
      contentBase: path.join(__dirname, 'build', 'web'),
    },
    plugins: [],
  },
  dev: {
    mode: 'development',
    devtool: 'eval-source-map',
  },
  prod: {
    mode: 'production',
    devtool: 'inline-source-map',
  },
};

module.exports = {
  ...config.common,
  ...(process.env.PRODUCTION ? config.prod : config.dev),
};
