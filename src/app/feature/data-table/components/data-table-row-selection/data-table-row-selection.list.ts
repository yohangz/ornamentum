import { ExampleFile, FileType } from '../../../../shared/models';

export const singleRowSelectionUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'single-row-selection-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/single-row-selection-usage/single-row-selection-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'single-row-selection-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/single-row-selection-usage/single-row-selection-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'single-row-selection-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/single-row-selection-usage/single-row-selection-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'single-row-selection-usage.data.ts',
    content: require('!!raw-loader?lang=typescript!./example/single-row-selection-usage/single-row-selection-usage.data.ts')
  }
];

export const singleToggleRowSelectionUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'single-toggle-row-selection-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/single-toggle-row-selection-usage/single-toggle-row-selection-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'single-toggle-row-selection-usage.component.ts',
    content: require(
      '!!raw-loader?lang=typescript!./example/single-toggle-row-selection-usage/single-toggle-row-selection-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'single-toggle-row-selection-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/single-toggle-row-selection-usage/single-toggle-row-selection-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'single-toggle-row-selection-usage.data.ts',
    content: require('!!raw-loader?lang=typescript!./example/single-toggle-row-selection-usage/single-toggle-row-selection-usage.data.ts')
  }
];

export const multiRowSelectionUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'multi-row-selection-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/multi-row-selection-usage/multi-row-selection-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'multi-row-selection-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/multi-row-selection-usage/multi-row-selection-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'multi-row-selection-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/multi-row-selection-usage/multi-row-selection-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'multi-row-selection-usage.data.ts',
    content: require('!!raw-loader?lang=typescript!./example/multi-row-selection-usage/multi-row-selection-usage.data.ts')
  }
];


