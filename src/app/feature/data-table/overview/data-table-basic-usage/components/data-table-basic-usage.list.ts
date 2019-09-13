export const demoSnippet: any = {
  npm: require('!!raw-loader!./docs/npm-install.md'),
  yarn: require('!!raw-loader!./docs/yarn-install.md'),
  moduleImport: require('!!raw-loader!./docs/module-import.md'),
  componentMarkup: require('!!raw-loader!./docs/app.component.html.md'),
  componentController: require('!!raw-loader!./docs/app.component.ts.md'),
  cssImport: require('!!raw-loader!./docs/style-css-import.json.md'),
  scssImport: require('!!raw-loader!./docs/style-scss-import.json.md')
};
