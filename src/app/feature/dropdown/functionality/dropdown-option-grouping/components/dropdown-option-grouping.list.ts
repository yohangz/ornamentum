import { ExampleFile, FileType } from 'helper-models';

export const optionGroupingUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'option-grouping-usage.component.ts',
    content: require('!!raw-loader!./example/option-grouping-usage/option-grouping-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'option-grouping-usage.component.html',
    content: require('!!raw-loader!./example/option-grouping-usage/option-grouping-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'option-grouping-usage.module.ts',
    content: require('!!raw-loader!./example/option-grouping-usage/option-grouping-usage.module.md')
  }
];

export const demoSnippet: any = {
  optionGrouping: require('!!raw-loader!./docs/group-by-field.md')
};
