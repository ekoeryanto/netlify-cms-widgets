// eslint-disable import/no-extraneous-dependencies
process.env.NODE_ENV = 'production';
// eslint-disable-next-line
const Bundler = require('parcel-bundler');
const { join } = require('path');
const fs = require('fs');

const { NETLIFY_REPO_DIR, NETLIFY_BUILD_BASE } = process.env;
const cacheDir = NETLIFY_BUILD_BASE
  ? join(NETLIFY_BUILD_BASE, 'cache', 'widgets')
  : join(NETLIFY_REPO_DIR || '.', 'node_modules', '.cache');

// Entrypoint file location
const file = join(__dirname, './index.html');

// Bundler options
const options = {
  outDir: './dist',
  outFile: 'index.html',
  publicUrl: './',
  watch: false,
  cache: true,
  cacheDir,
  minify: true,
  target: 'browser',
  https: false,
  logLevel: 3,
  hmrPort: 0,
  sourceMaps: true,
  hmrHostname: '',
  detailedReport: true,
};

// Initialises a bundler using the entrypoint location and options provided
const bundler = new Bundler(file, options);

bundler.bundle().then(() => {
  fs.createReadStream(join(__dirname, 'config.yml')).pipe(fs.createWriteStream(join(options.outDir, 'config.yml')));
});
