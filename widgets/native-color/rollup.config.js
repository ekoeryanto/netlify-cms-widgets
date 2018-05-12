import igniter from 'module-igniter'

const plug = igniter({ prefix: 'rollup-plugin-' })
const environment = process.env.NODE_ENV || 'development'
const prod = environment === 'production'
const watch = process.env.ROLLUP_WATCH

const globals = {
  'netlify-cms': 'CMS',
  react: 'React',
  'react-dom': 'ReactDOM',
  'prop-types': 'PropTypes',
  immutable: 'Immutable',
  'react-immutable-proptypes': 'ImmutablePropTypes',
  classnames: 'classNames',
  'create-react-class': 'createClass'
}

const external = Object.keys(globals)
const WATCH_FORMAT = process.env.WATCH_FORMAT || 'umd'
const formats = ['umd', 'iife', 'cjs', 'es']
const extension = prod ? 'min.js' : 'js'
const isBrowser = format => format === 'umd' || format === 'iife'

const createOutput = (format = 'umd') => ({
  sourcemap: prod,
  name: 'NetlifyCMSWidgetNativeColor',
  file: `dist/${format}/native-color.${extension}`,
  format,
  globals
})

export default (watch ? [WATCH_FORMAT] : formats).map(format => ({
  input: 'src/index.js',
  output: createOutput(format),
  external,
  plugins: [
    ...plug({
      replace: { 'process.env.NODE_ENV': JSON.stringify(environment) },
      'node-resolve': true,
      commonjs: {
        include: ['**/node_modules/**']
      },
      babel: {
        exclude: ['**/node_modules/**'],
        presets: [
          isBrowser(format) && [
            '@babel/preset-react',
            {
              pragma: 'h'
            }
          ]
        ].filter(Boolean),
        plugins: [
          isBrowser(format) && [
            'transform-react-remove-prop-types',
            {
              removeImport: true,
              additionalLibraries: ['react-immutable-proptypes']
            }
          ]
        ].filter(Boolean)
      },
      postcss: {
        sourcemap: prod,
        minimize: prod
      }
    }),
    ...plug('strip', 'uglify', prod),
    ...plug(
      {
        serve: {
          contentBase: [
            '../../node_modules',
            '../../widgets',
            '../../core',
            'dist',
            'public'
          ],
          historyApiFallback: true
        },
        livereload: true
      },
      watch
    )
  ]
}))
