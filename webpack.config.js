var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

var cssPlugin = new ExtractTextPlugin('[name].css');

module.exports = [
  {
    entry: './src/index.js',
    output: {
      path: 'dist',
      filename: 'index_bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.html$/,
          loader: 'html?interpolate'
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html'
      })
    ]
  },
  {
    entry: {
      './index': './src/styles/index.scss'
    },
    output: {
     path: 'dist',
     filename: '[name].css'
   },
   module: {
     loaders: [
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          loader: cssPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader')
        }
     ]
   },
   postcss: [ autoprefixer({ browsers: [ 'ie 10', 'last 2 versions'] }) ],
   plugins: [
     cssPlugin
   ]
  }
];
