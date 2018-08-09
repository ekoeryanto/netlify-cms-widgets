import resolvePlugin from 'rollup-plugin-node-resolve';
import commonJsPlugin from 'rollup-plugin-commonjs';
import babelPlugin from 'rollup-plugin-babel';
import replacePlugin from 'rollup-plugin-replace';
import stripPlugin from 'rollup-plugin-strip';
import { uglify } from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

const environment = process.env.NODE_ENV || 'development';

const plugins = [
  replacePlugin({
    'process.env.NODE_ENV': JSON.stringify(environment),
  }),
  babelPlugin({
    exclude: ['**/node_modules/**'],
  }),
  resolvePlugin(),
  commonJsPlugin({
    include: ['**/node_modules/**'],
  }),
  stripPlugin(),
  uglify({}, minify),
];

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'iife',
  },
  plugins,
};
