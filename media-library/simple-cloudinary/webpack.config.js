const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const SERVE = process.env.WEBPACK_SERVE;

module.exports = {
  mode: 'production',
  entry: {
    main: SERVE ? './src/index.js' : './src/library.js',
  },
  output: {
    library: 'NetlifySimpleCloudinary',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  devtool: SERVE ? 'inline-source-map' : 'source-map',
  externals: {
    cloudinary: 'cloudinary',
    'netlify-cms': 'CMS',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [
              ['@babel/preset-env', { modules: false }],
              '@babel/preset-react',
            ],
            plugins: ['@babel/plugin-syntax-dynamic-import'],
          },
        }],
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 2,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          // 'postcss-loader',
          // 'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
    }),
    SERVE && new HtmlWebpackPlugin({
      hash: true,
      template: './public/index.html',
      filename: 'index.html',
    }),
    SERVE && new CopyWebpackPlugin([
      './public/config.yml',
    ]),
  ].filter(o => o),
};
