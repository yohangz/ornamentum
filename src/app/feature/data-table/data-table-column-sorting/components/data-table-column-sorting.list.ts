import { ExampleFile, FileType } from '../../../../shared/models';

export const columnSortingUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'column-sorting-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/column-sorting-usage/column-sorting-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'column-sorting-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/column-sorting-usage/column-sorting-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'column-sorting-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/column-sorting-usage/column-sorting-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'column-sorting-usage.data.ts',
    content: require('!!raw-loader?lang=typescript!./example/column-sorting-usage/column-sorting-usage.data.ts')
  }
];

