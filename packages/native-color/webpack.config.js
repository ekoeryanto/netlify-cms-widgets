const targets = {
  umd: 'umd',
  commonjs2: 'common',
  var: ''
}

module.exports = (env, args) => {
  const prod = args.mode === 'production'

  return Object.keys(targets).map(t => ({
    mode: prod ? 'production' : 'development',
    devtool: 'source-map',
    externals: {
      ...cmx('netlify-cms-extended', 'CMS', t),
      ...cmx('react-immutable-proptypes', ['CMS', 'ImmutablePropTypes'], t),
      ...cmx('prop-types', ['CMS', 'PropTypes'], t),
      ...cmx('immutable', ['CMS', 'Immutable'], t),
      ...cmx('react', ['CMS', 'React'], t)
    },
    output: {
      library: 'NetlifyCMSNativeColorWidget',
      libraryTarget: t,
      filename: `${targets[t] || '.'}/[name]${prod ? '.min.js' : '.js'}`,
      umdNamedDefine: true
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
  }))
}

function cmx (name, root, target) {
  const stringRoot = `${Array.isArray(root) ? root.join('.') : root}`
  switch (target) {
    case 'umd':
      return {
        [name]: {
          root,
          commonjs: name,
          commonjs2: name
        }
      }
    case 'commonjs2':
    case 'commonjs':
      return {[name]: name}
    case 'window':
      return {[name]: {window: root}}
    default:
      return {[name]: stringRoot}
  }
}
