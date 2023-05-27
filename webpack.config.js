/* eslint-disable no-unused-vars */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: [
    // entry point of our app
    './client/index.js',
  ],

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/', // <-- ??
    filename: 'bundle.js',
  },

  devtool: 'eval-source-map', // <-- ??
  mode: process.env.NODE_ENV,
  devServer: {
    host: '127.0.0.1',
    port: 8080,
    // enable HMR on the devServer
    hot: true,
    // fallback to root for other urls
    // redirect all server requests to a specified entry point, preventing 404 errors
    historyApiFallback: true,

    static: {
      // <-- ??
      // match the output path
      directory: path.resolve(__dirname, 'dist'),
      // match the output 'publicPath'
      publicPath: '/',
    },

    headers: { 'Access-Control-Allow-Origin': '*' },
    /**
     * proxy is required in order to make api calls to
     * express server while using hot-reload webpack server
     * routes api fetch requests from localhost:8080/api/* (webpack dev server)
     * to localhost:3000/api/* (where our Express server is running)
     */
    proxy: {
      '/api/**': {
        target: 'http://localhost:3000/',
        secure: false,
      },
      '/assets/**': {
        target: 'http://localhost:3000/',
        secure: false,
      },
    },
  },

  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Add the preset here
          },
        },
      },
      {
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg|ico)$/,
        use: [
          // loads files as base64 encoded data url if image file is less than set limit
          {
            loader: 'url-loader',
            options: {
              // if file is greater than the limit (bytes), file-loader is used as fallback
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
    /*The HtmlWebpackPlugin plugin generates an HTML file (index.html) based on a template file (./client/index.html) and injects the necessary scripts and stylesheets into the generated HTML file.
    The MiniCssExtractPlugin plugin extracts CSS code from the JavaScript bundle and creates a separate CSS file, allowing for better separation of concerns and improved performance when loading styles in the web application. */
    plugins: [
      new HtmlWebpackPlugin({
        template: './client/index.html',
      }),
      new MiniCssExtractPlugin(),
    ],

    resolve: {
      // Enable importing JS / JSX files without specifying their extension
      extensions: ['.js', '.jsx'],
    },
};
