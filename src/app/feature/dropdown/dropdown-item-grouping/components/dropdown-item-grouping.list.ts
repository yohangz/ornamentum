import { ExampleFile, FileType } from 'helper-models';

export const itemGroupingUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'item-grouping-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/item-grouping-usage/item-grouping-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'item-grouping-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/item-grouping-usage/item-grouping-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'item-grouping-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/item-grouping-usage/item-grouping-usage.component.html')
  }
];

export const demoSnippet: any = {
  itemGrouping: require('!!raw-loader?lang=typescript!./docs/group-by-field.md')
};
