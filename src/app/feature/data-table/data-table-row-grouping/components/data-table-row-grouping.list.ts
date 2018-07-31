import { ExampleFile, FileType } from '../../../../shared/models';

export const rowGroupingUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'row-grouping-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/row-grouping-usage/row-grouping-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'row-grouping-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/row-grouping-usage/row-grouping-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'row-grouping-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/row-grouping-usage/row-grouping-usage.component.html')
  },
  // {
  //   type: FileType.TS,
  //   name: 'sample-data.json',
  //   content: require('!!raw-loader?lang=typescript!../../../../shared/data/sample-data.json')
  // }
];

