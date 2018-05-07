import resolvePlugin from 'rollup-plugin-node-resolve'
import commonJsPlugin from 'rollup-plugin-commonjs'
import babelPlugin from 'rollup-plugin-babel'
import replacePlugin from 'rollup-plugin-replace'
import stripPlugin from 'rollup-plugin-strip'
import uglifyPlugin from 'rollup-plugin-uglify'
import servePlugin from 'rollup-plugin-serve'
import livereloadPlugin from 'rollup-plugin-livereload'

const environment = process.env.NODE_ENV || 'development'
const prod = environment === 'production'
const watch = process.env.ROLLUP_WATCH

const globals = {
  'netlify-cms-extended': 'CMS',
  react: 'CMS.React',
  'react-dom': 'CMS.ReactDOM',
  'prop-types': 'CMS.PropTypes',
  immutable: 'CMS.Immutable',
  'react-immutable-proptypes': 'CMS.ImmutablePropTypes',
  classnames: 'CMS.classNames',
  'create-react-class': 'CMS.createReactClass',
  'react-virtualized-select': 'VirtualizedSelect',
  '@fortawesome/fontawesome': 'fontawesome',
  '@fortawesome/fontawesome-free-brands': 'fontawesome-free-brands',
  '@fortawesome/fontawesome-free-regular': 'fontawesome-free-regular',
  '@fortawesome/fontawesome-free-solid': 'fontawesome-free-solid',
  '@fortawesome/react-fontawesome': 'react-fontawesome'
}

const external = Object.keys(globals)

const formats = ['umd', 'cjs', 'es']

const extension = prod ? 'min.js' : 'js'

const plugins = [
  replacePlugin({
    'process.env.NODE_ENV': JSON.stringify(environment)
  }),
  babelPlugin({
    exclude: ['**/node_modules/**']
  }),
  resolvePlugin(),
  commonJsPlugin({
    include: ['**/node_modules/**']
  })
]

watch &&
  plugins.concat([
    servePlugin({
      contentBase: ['../../node_modules', '../../widgets', '../../core', 'dist', 'public'],
      historyApiFallback: true
    }),
    livereloadPlugin()
  ])

prod && plugins.concat([stripPlugin(), uglifyPlugin()])

const createOutput = (format = 'umd') => ({
  sourcemap: prod,
  name: 'NetlifyCMSWidgetFontawesome',
  file: `dist/${format}/fontawesome.${extension}`,
  format,
  globals
})

export default {
  input: 'src/index.js',
  output: formats.map(format => createOutput(format)),
  external,
  plugins
}
