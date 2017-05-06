import * as path from 'path';
import * as LoaderOptionsPlugin from 'webpack/lib/LoaderOptionsPlugin';

export default {
  devtool: 'inline-source-map',
  entry: [
    path.resolve(__dirname, 'src/index.ts'),
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        loader: 'tslint-loader',
        options: {
          configFile: './tslint.json',
          emitErrors: false,
        },
        test: /\.ts$/,
      },
      {
        exclude: /node_modules/,
        loader: 'ts-loader',
        test: /\.ts$/,
      },
      {
        exclude: /node_modules/,
        loaders: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
        test: /\.scss$/,
      },
    ],
  },
};
