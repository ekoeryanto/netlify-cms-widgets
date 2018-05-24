const commonPrompts = [
  {
    type: 'input',
    name: 'name',
    message: 'Widget name',
  },
  {
    type: 'input',
    name: 'author',
    message: 'Widget author',
    default: 'Eko Eryanto <ekoeryanto@gmail.com>',
  },
];

const addFile = (type, path, tpl) => {
  const template = (tpl || path).replace(/\.hbs$/, '');
  return {
    type: 'add',
    path: `${type}/{{kebabCase name}}/${path}`,
    templateFile: `plop-templates/${type}/${template}.hbs`,
  };
};

module.exports = function generate(plop) {
  plop.setGenerator('widget', {
    description: 'Generate basic files for new widget',
    prompts: commonPrompts,
    actions: () => [
      addFile('widgets', 'package.json'),
      addFile('widgets', '/src/index.js', 'index.js'),
      addFile('widgets', 'src/Control.js', 'control.js'),
      addFile('widgets', 'src/Preview.js', 'preview.js'),
      addFile('widgets', 'README.md'),
      addFile('widgets', '.babelrc'),
      addFile('widgets', 'rollup.config.js'),
      addFile('widgets', 'public/index.html', 'index.html'),
      addFile('widgets', 'public/config.yml', 'config.yml'),
    ],
  });

  plop.setGenerator('core', {
    description: 'Generate basic files for new widget',
    prompts: commonPrompts,
    actions: () => [
      addFile('core', '.babelrc'),
      addFile('core', 'src/index.js', 'index.js'),
      addFile('core', 'package.json'),
      addFile('core', 'README.md'),
      addFile('core', 'rollup.config.js'),
    ],
  });
};
