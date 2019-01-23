import { ExampleFile, FileType } from '../../../../shared/models';

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
  import: require('!!raw-loader?lang=typescript!./docs/import.md'),
  cssImport: require('!!raw-loader?lang=json!./docs/style-css-import.json.md'),
  scssImport: require('!!raw-loader?lang=json!./docs/style-scss-import.json.md'),
  componentMarkup: require('!!raw-loader?lang=html!./docs/basic-usage.component.html.md'),
  componentController: require('!!raw-loader?lang=typescript!./docs/basic-usage.component.ts.md')
};
