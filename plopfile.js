module.exports = function (plop) {
  // Add new package
  plop.setGenerator(`package`, {
    description: `This is sets up the basic files for a new package.`,
    prompts: [
      {
        type: `input`,
        name: `name`,
        message: `Name of new package`
      },
      {
        type: `input`,
        name: `author`,
        message: `Author of the package`,
        default: 'Eko Eryanto <ekoeryanto@gmail.com>'
      }
    ],
    actions: (data) =>
      [
        {
          type: `add`,
          path: `packages/{{kebabCase name}}/package.json`,
          templateFile: `plop-templates/package/package.json.hbs`
        },
        {
          type: `add`,
          path: `packages/{{kebabCase name}}/src/index.js`,
          templateFile: `plop-templates/package/index.js.hbs`
        },
        {
          type: `add`,
          path: `packages/{{kebabCase name}}/README.md`,
          templateFile: `plop-templates/package/README.md.hbs`
        },
        {
          type: `add`,
          path: `packages/{{kebabCase name}}/.babelrc`,
          templateFile: `plop-templates/package/.babelrc.hbs`
        },
        {
          type: `add`,
          path: `packages/{{kebabCase name}}/webpack.config.js`,
          templateFile: `plop-templates/package/webpack.config.js.hbs`
        },
        {
          type: `add`,
          path: `packages/{{kebabCase name}}/.gitignore`,
          templateFile: `plop-templates/package/.gitignore.hbs`
        },
        {
          type: `add`,
          path: `packages/{{kebabCase name}}/.npmignore`,
          templateFile: `plop-templates/package/.npmignore.hbs`
        }
      ].filter(Boolean)
  })
}
