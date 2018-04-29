module.exports = {
  devtool: 'source-map',
  externals: {
    ...cmx('netlify-cms-extended', 'CMS'),
    ...cmx('react-immutable-proptypes', ['CMS', 'ImmutablePropTypes']),
    ...cmx('prop-types', ['CMS', 'PropTypes']),
    ...cmx('immutable', ['CMS', 'Immutable']),
    ...cmx('react', ['CMS', 'React'])
  },
  output: {
    library: 'NetlifyCMSMaterialIconsWidget',
    libraryTarget: 'umd',
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        enforce: 'pre'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      }
    ]
  }
}

function cmx (name, root) {
  return {
    [name]: {
      root,
      commonjs: name,
      commonjs2: name,
      amd: name
    }
  }
}
