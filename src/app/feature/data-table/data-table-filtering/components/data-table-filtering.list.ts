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
    name: 'sample-data.ts',
    content: require('!!raw-loader?lang=typescript!../../../../shared/data/sample-data.ts')
  }
];

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
    name: 'sample-data.ts',
    content: require('!!raw-loader?lang=typescript!../../../../shared/data/sample-data.ts')
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
    name: 'sample-data.ts',
    content: require('!!raw-loader?lang=typescript!../../../../shared/data/sample-data.ts')
  }
];

export const demoSnippet: any = {
  filterable: require('!!raw-loader?lang=typescript!./docs/filterable.md')
};
