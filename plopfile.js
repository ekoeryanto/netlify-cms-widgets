module.exports = function (plop) {
  plop.setGenerator('widget', {
    description: 'Generate basic files for new widget',
    prompts: [
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
    ],
    actions: data =>
      [
        {
          type: 'add',
          path: 'packages/{{kebabCase name}}/package.json',
          templateFile: 'plop-templates/widget/package.json.hbs'
        },
        {
          type: 'add',
          path: 'packages/{{kebabCase name}}/src/index.js',
          templateFile: 'plop-templates/widget/index.js.hbs'
        },
        {
          type: 'add',
          path: 'packages/{{kebabCase name}}/src/Control.js',
          templateFile: 'plop-templates/widget/control.js.hbs'
        },
        {
          type: 'add',
          path: 'packages/{{kebabCase name}}/src/Preview.js',
          templateFile: 'plop-templates/widget/preview.js.hbs'
        },
        {
          type: 'add',
          path: 'packages/{{kebabCase name}}/README.md',
          templateFile: 'plop-templates/widget/README.md.hbs'
        },
        {
          type: 'add',
          path: 'packages/{{kebabCase name}}/.babelrc',
          templateFile: 'plop-templates/widget/.babelrc.hbs'
        },
        {
          type: 'add',
          path: 'packages/{{kebabCase name}}/rollup.config.js',
          templateFile: 'plop-templates/widget/rollup.config.js.hbs'
        },
        {
          type: 'add',
          path: 'packages/{{kebabCase name}}/public/index.html',
          templateFile: 'plop-templates/widget/index.html.hbs'
        },
        {
          type: 'add',
          path: 'packages/{{kebabCase name}}/public/config.yml',
          templateFile: 'plop-templates/widget/config.yml.hbs'
        }
      ].filter(Boolean)
  })
}
