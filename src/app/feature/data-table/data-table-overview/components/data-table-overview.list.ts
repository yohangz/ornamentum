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
  },
  {
    type: FileType.TS,
    name: 'sample-data.ts',
    content: require('!!raw-loader?lang=typescript!../../../../shared/data/sample-data.ts')
  }
];

