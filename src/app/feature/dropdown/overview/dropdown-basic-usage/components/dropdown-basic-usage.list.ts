import { ExampleFile, FileType } from 'helper-models';

export const advancedUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'advanced-usage.component.ts',
    content: require('!!raw-loader!./example/advanced-usage/advanced-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'advanced-usage.component.html',
    content: require('!!raw-loader!./example/advanced-usage/advanced-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'advanced-usage.module.ts',
    content: require('!!raw-loader!./example/advanced-usage/advanced-usage.module.md')
  }
];

export const demoSnippet: any = {
  npm: require('!!raw-loader!./docs/npm-install.md'),
  yarn: require('!!raw-loader!./docs/yarn-install.md'),
  moduleImport: require('!!raw-loader!./docs/module-import.md'),
  componentMarkup: require('!!raw-loader!./docs/app.component.html.md'),
  componentController: require('!!raw-loader!./docs/app.component.ts.md'),
  cssImport: require('!!raw-loader!./docs/style-css-import.json.md'),
  scssImport: require('!!raw-loader!./docs/style-scss-import.json.md')
};
