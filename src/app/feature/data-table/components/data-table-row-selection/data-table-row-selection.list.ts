import { ExampleFile, FileType } from '../../../../shared/models';

export const rowSelectionUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'row-selection-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/row-selection-usage/row-selection-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'row-selection-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/row-selection-usage/row-selection-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'row-selection-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/row-selection-usage/row-selection-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'row-selection-usage.data.ts',
    content: require('!!raw-loader?lang=typescript!./example/row-selection-usage/row-selection-usage.data.ts')
  }
];

