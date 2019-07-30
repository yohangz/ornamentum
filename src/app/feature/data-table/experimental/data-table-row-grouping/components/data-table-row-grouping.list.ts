import { ExampleFile, FileType } from 'helper-models';

export const rowGroupingUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'row-grouping-usage.component.ts',
    content: require('!!raw-loader!./example/row-grouping-usage/row-grouping-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'row-grouping-usage.component.html',
    content: require('!!raw-loader!./example/row-grouping-usage/row-grouping-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'row-grouping-usage.module.ts',
    content: require('!!raw-loader!./example/row-grouping-usage/row-grouping-usage.module.md')
  }
];

export const demoSnippet: any = {
  onDynamicRowSpanExtract: require('!!raw-loader!./docs/on-dynamic-row-span-extract.md')
};
