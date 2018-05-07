const commonPrompts = [
  {
    type: 'input',
    name: 'name',
    message: 'Widget name'
  },
  {
    type: 'input',
    name: 'author',
    message: 'Widget author',
    default: 'Eko Eryanto <ekoeryanto@gmail.com>'
  }
]

const addFile = (type, path, base, template) => {
  template = template || path
  base = base || type

  return {
    type: 'add',
    path: `${base}/{{kebabCase name}}/${path}`,
    templateFile: `plop-templates/${type}/${template}.hbs`
  }
}

module.exports = function (plop) {
  plop.setGenerator('widget', {
    description: 'Generate basic files for new widget',
    prompts: commonPrompts,
    actions: data =>
      [
        {
          type: 'add',
          path: 'widgets/{{kebabCase name}}/package.json',
          templateFile: 'plop-templates/widget/package.json.hbs'
        },
        {
          type: 'add',
          path: 'widgets/{{kebabCase name}}/src/index.js',
          templateFile: 'plop-templates/widget/index.js.hbs'
        },
        {
          type: 'add',
          path: 'widgets/{{kebabCase name}}/src/Control.js',
          templateFile: 'plop-templates/widget/control.js.hbs'
        },
        {
          type: 'add',
          path: 'widgets/{{kebabCase name}}/src/Preview.js',
          templateFile: 'plop-templates/widget/preview.js.hbs'
        },
        {
          type: 'add',
          path: 'widgets/{{kebabCase name}}/README.md',
          templateFile: 'plop-templates/widget/README.md.hbs'
        },
        {
          type: 'add',
          path: 'widgets/{{kebabCase name}}/.babelrc',
          templateFile: 'plop-templates/widget/.babelrc.hbs'
        },
        {
          type: 'add',
          path: 'widgets/{{kebabCase name}}/rollup.config.js',
          templateFile: 'plop-templates/widget/rollup.config.js.hbs'
        },
        {
          type: 'add',
          path: 'widgets/{{kebabCase name}}/public/index.html',
          templateFile: 'plop-templates/widget/index.html.hbs'
        },
        {
          type: 'add',
          path: 'widgets/{{kebabCase name}}/public/config.yml',
          templateFile: 'plop-templates/widget/config.yml.hbs'
        }
      ].filter(Boolean)
  })

  plop.setGenerator('core', {
    description: 'Generate basic files for new widget',
    prompts: commonPrompts,
    actions: data => [
      addFile('core', '.babelrc'),
      addFile('core', 'src/index.js', null, 'index.js'),
      addFile('core', 'package.json'),
      addFile('core', 'README.md'),
      addFile('core', 'rollup.config.js')
    ]
  })
}
