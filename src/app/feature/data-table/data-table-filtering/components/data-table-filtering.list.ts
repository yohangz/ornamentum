import { ExampleFile, FileType } from '../../../../shared/models';

export const filterDropdownUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'filter-dropdown-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/filter-dropdown-usage/filter-dropdown-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'filter-dropdown-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/filter-dropdown-usage/filter-dropdown-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'filter-dropdown-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/filter-dropdown-usage/filter-dropdown-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'filter-dropdown-usage.data.ts',
    content: require('!!raw-loader?lang=typescript!./example/filter-dropdown-usage/filter-dropdown-usage.data.ts')
  }
];

export const filterTextBoxUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'filter-text-box-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/filter-text-box-usage/filter-text-box-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'filter-text-box-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/filter-text-box-usage/filter-text-box-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'filter-text-box-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/filter-text-box-usage/filter-text-box-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'filter-text-box-usage.data.ts',
    content: require('!!raw-loader?lang=typescript!./example/filter-text-box-usage/filter-text-box-usage.data.ts')
  }
];

