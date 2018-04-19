const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin')
const nodeExternals = require('webpack-node-externals');

const production = process.env.NODE_ENV === 'production';

module.exports = {
  externals: production ? [
    {
      'netlify-cms': 'CMS'
    },
    {
      'netlify-cms': 'h'
    },
    {
      'netlify-cms': 'createClass'
    }
  ] : [],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
    ],
  },
  devtool: production ? 'source-map' : 'eval-source-map',
  plugins: production ? [] : [
    new HtmlWebpackPlugin({
      template: './example/example.html'
    }),
    new HtmlWebpackExternalsPlugin({
      externals: [
        {
          module: 'netlify-cms',
          entry: ['dist/cms.js', 'dist/cms.css'],
          global: 'CMS'
        }
      ]
    })
  ],
};
