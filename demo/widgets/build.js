process.env.NODE_ENV = 'production';
// eslint-disable-next-line
const Bundler = require('parcel-bundler');
const { join } = require('path');
const fs = require('fs');

const rootDir = (...paths) => join(__dirname, '..', '..', ...paths);
const baseDir = (...paths) => join(__dirname, ...paths);

// Entrypoint file location
const file = baseDir('./index.html');

// Bundler options
const options = {
  outDir: rootDir('dist'),
  outFile: 'index.html',
  publicUrl: './',
  watch: false,
  cache: true,
  cacheDir: rootDir('node_modules/.cache/demo/widgets'),
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
  fs.createReadStream(baseDir('config.yml')).pipe(fs.createWriteStream(join(options.outDir, 'config.yml')));
});
