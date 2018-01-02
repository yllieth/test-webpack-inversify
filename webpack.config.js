const path = require('path');
const pkg = require('./package.json');
const webpack = require('webpack');

// rules
const typescript = {
  test: /\.ts?$/,
  use: {
    loader: 'ts-loader',
    options: {
      logLevel: 'info'
    }
  },
  exclude: /node_modules/
};

// plugins
const CleanWebpackPlugin = require('clean-webpack-plugin');

// other declarations
const BUILD_FOLDER = 'dist';

module.exports = {
  entry: {
    app: './src/index.ts',
    vendor: Object.keys(pkg.dependencies)
  },
  module: {
    rules: [ typescript ]
  },
  resolve: {
    extensions: [ '.ts', '.js' ]
  },
  devtool: 'source-map',
  output: {
    filename: '[name].js',
    chunkFilename: '[name]-[chunkhash].js',
    path: path.resolve(__dirname, BUILD_FOLDER)
  },
  plugins: [
    // only put in vendors libs existing in the node_module folder
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: ({ resource }) => /node_modules/.test(resource),
    }),

    // remove the content of the ./dist folder
    new CleanWebpackPlugin([BUILD_FOLDER])
  ]
};
