import { ExampleFile, FileType } from 'helper-models';

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
  }
];

export const filterDebounceUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'filter-debounce-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/filter-debounce-usage/filter-debounce-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'filter-debounce-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/filter-debounce-usage/filter-debounce-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'filter-debounce-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/filter-debounce-usage/filter-debounce-usage.component.html')
  }
];

export const filterDebounceTimeUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'filter-debounce-time-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/filter-debounce-time-usage/filter-debounce-time-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'filter-debounce-time-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/filter-debounce-time-usage/filter-debounce-time-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'filter-debounce-time-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/filter-debounce-time-usage/filter-debounce-time-usage.component.html')
  }
];

export const filterTextUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'filter-text-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/filter-text-usage/filter-text-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'filter-text-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/filter-text-usage/filter-text-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'filter-text-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/filter-text-usage/filter-text-usage.component.html')
  }
];

export const demoSnippet: any = {
  dropdownFiltering: require('!!raw-loader?lang=typescript!./docs/filterable.md')
};
