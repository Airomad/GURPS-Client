/**
 * module dependencies for webpack dev configuration
 */
const path = require('path');
const webpack = require('webpack');

// define paths
const nodeModulesPath = path.resolve(__dirname, './node_modules');
const distPath = path.resolve(__dirname, './dist');
const mainAppPath = path.resolve(__dirname, './src', 'index');
const globalsPath = path.resolve(__dirname, './src', 'Globals');
const componentsPath = path.resolve(__dirname, './src', 'Components');
const viewsPath = path.resolve(__dirname, './src', 'Views');

/**
 * webpack configuration
 */
module.exports = {
  // webpack-dev-server configuration
  devServer: {

    // enable HMR on the server
    hot: true,

    // error level in console
    stats: {
      colors: true,
      hash: false,
      version: false,
      timings: true,
      assets: false,
      chunks: false,
      modules: false,
      reasons: false,
      children: false,
      source: false,
      errors: true,
      errorDetails: false,
      warnings: false,
      publicPath: false,
    },

    // enable gzip compression
    compress: true,

    // return any 404 error to index.html for react-router to handle
    historyApiFallback: true,
  },

  // targeting for only web, no nodejs environment
  target  : 'web',

  // using inline-source-map for having useful outputs in browser console
  devtool: 'inline-source-map',

  // entry for application
  entry: {

    // using the name 'bundle.js'
    'bundle': [

      // babel polyfill for transforming es6
      'babel-polyfill',

      // activate HMR for React
      'react-hot-loader/patch',

      // entry point for the app
      mainAppPath,
    ],
  },

  // output file
  output: {
    // will output 'bundle.js' as we used 'bundle' for entry
    filename: '[name].js',

    // distribution path is not related to source path of index.html
    // this path will produce the webpack output if we run the build command
    path: distPath,
  },

  // module loaders
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: nodeModulesPath,
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss-loader?sourceMap=inline',
        ],
      },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
      { test: /\.svg$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' },
    ],
  },

  // used webpack plugins
  plugins: [
    // hot module replacement pluggin to enable hmr
    new webpack.HotModuleReplacementPlugin(),

    // prints more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin(),
  ],

  // resolving paths and extensions
  resolve : {
    extensions: ['.js', '.css'],
    alias: {
      Components: componentsPath,
      Globals: globalsPath,
      Views: viewsPath,
    },
  },
};
