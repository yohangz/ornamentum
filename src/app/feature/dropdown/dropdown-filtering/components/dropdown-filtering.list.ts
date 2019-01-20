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

export const filterDebounceUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'filtering-filter-debounce-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/filtering-filter-debounce-usage/filtering-filter-debounce-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'filtering-filter-debounce-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/filtering-filter-debounce-usage/filtering-filter-debounce-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'filtering-filter-debounce-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/filtering-filter-debounce-usage/filtering-filter-debounce-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'sample-data.ts',
    content: require('!!raw-loader?lang=typescript!../../../../shared/data/sample-data.ts')
  }
];

export const filterDebounceTimeUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'filtering-filter-debounce-time-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/filtering-filter-debounce-time-usage/filtering-filter-debounce-time-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'filtering-filter-debounce-time-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/filtering-filter-debounce-time-usage/filtering-filter-debounce-time-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'filtering-filter-debounce-time-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/filtering-filter-debounce-time-usage/filtering-filter-debounce-time-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'sample-data.ts',
    content: require('!!raw-loader?lang=typescript!../../../../shared/data/sample-data.ts')
  }
];

export const filterTextUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'filtering-filter-text-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/filtering-filter-text-usage/filtering-filter-text-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'filtering-filter-text-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/filtering-filter-text-usage/filtering-filter-text-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'filtering-filter-text-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/filtering-filter-text-usage/filtering-filter-text-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'sample-data.ts',
    content: require('!!raw-loader?lang=typescript!../../../../shared/data/sample-data.ts')
  }
];

export const demoSnippet: any = {
  dropdownFiltering: require('!!raw-loader?lang=typescript!./docs/filterable.md')
};
