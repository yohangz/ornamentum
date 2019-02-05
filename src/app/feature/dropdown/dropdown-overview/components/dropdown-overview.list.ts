import { ExampleFile, FileType } from 'helper-models';

export const basicUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'basic-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/basic-usage/basic-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'basic-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/basic-usage/basic-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'basic-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/basic-usage/basic-usage.component.html')
  }
];

export const demoSnippet: any = {
  npm: require('!!raw-loader?lang=typescript!./docs/npm-install.md'),
  yarn: require('!!raw-loader?lang=typescript!./docs/yarn-install.md'),
  moduleImport: require('!!raw-loader?lang=typescript!./docs/module-import.md'),
  npmCompassImport: require('!!raw-loader?lang=typescript!./docs/npm-compass-import.md'),
  yarnCompassImport: require('!!raw-loader?lang=typescript!./docs/yarn-compass-import.md'),
  componentMarkup: require('!!raw-loader?lang=html!./docs/app.component.html.md'),
  componentController: require('!!raw-loader?lang=typescript!./docs/app.component.ts.md'),
  cssImport: require('!!raw-loader?lang=json!./docs/style-css-import.json.md'),
  scssImport: require('!!raw-loader?lang=json!./docs/style-scss-import.json.md')
};
