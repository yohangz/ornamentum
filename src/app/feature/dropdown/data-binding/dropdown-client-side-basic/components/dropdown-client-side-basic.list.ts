import { ExampleFile, FileType } from 'helper-models';

export const optionsUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'options-usage.component.ts',
    content: require('!!raw-loader!./example/options-usage/options-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'options-usage.component.html',
    content: require('!!raw-loader!./example/options-usage/options-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'options-usage.module.ts',
    content: require('!!raw-loader!./example/options-usage/options-usage.module.md')
  }
];

export const dataSourceUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'data-source-usage.component.ts',
    content: require(
      '!!raw-loader!./example/data-source-usage/data-source-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'data-source-usage.component.html',
    content: require('!!raw-loader!./example/data-source-usage/data-source-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'data-source-usage.module.ts',
    content: require('!!raw-loader!./example/data-source-usage/data-source-usage.module.md')
  }
];

export const demoSnippet: any = {
  options: require('!!raw-loader!./docs/options.md'),
  dataSource: require('!!raw-loader!./docs/data-source.md')
};
