import { ExampleFile, FileType } from '../../../../shared/models';

export const loadingSpinnerTemplateStylishUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'loading-spinner-template-stylish-usage.module.ts',
    content: require(
      '!!raw-loader?lang=typescript!./example/loading-spinner-template-stylish-usage/loading-spinner-template-stylish-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'loading-spinner-template-stylish-usage.component.ts',
    content: require(
      '!!raw-loader?lang=typescript!./example/loading-spinner-template-stylish-usage/loading-spinner-template-stylish-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'loading-spinner-template-stylish-usage.component.html',
    content: require(
      '!!raw-loader?lang=html!./example/loading-spinner-template-stylish-usage/loading-spinner-template-stylish-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'sample-data.ts',
    content: require('!!raw-loader?lang=typescript!../../../../shared/data/sample-data.ts')
  }
];

export const demoSnippet: any = {
  template: require('!!raw-loader?lang=typescript!./docs/template.md'),
  stylishTemplate: require('!!raw-loader?lang=typescript!./docs/stylish-template.md')
};
