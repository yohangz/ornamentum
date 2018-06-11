import { ExampleFile, FileType } from '../../../../shared/models';

export const filteringUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'filtering-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/filtering-usage/filtering-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'filtering-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/filtering-usage/filtering-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'filtering-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/filtering-usage/filtering-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'filtering-usage.data.ts',
    content: require('!!raw-loader?lang=typescript!./example/filtering-usage/filtering-usage.data.ts')
  }
];
