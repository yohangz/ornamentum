import { ExampleFile, FileType } from '../../../../shared/models';

export const onDataBindUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'on-data-bind-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/on-data-bind-usage/on-data-bind-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'on-data-bind-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/on-data-bind-usage/on-data-bind-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'on-data-bind-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/on-data-bind-usage/on-data-bind-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'sample-data.ts',
    content: require('!!raw-loader?lang=typescript!../../../../shared/data/sample-data.ts')
  }
];
