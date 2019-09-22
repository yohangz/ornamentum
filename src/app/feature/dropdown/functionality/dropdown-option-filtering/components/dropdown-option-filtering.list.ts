import { ExampleFile, FileType } from 'helper-models';

export const optionFilteringUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'option-filtering-usage.component.ts',
    content: require('!!raw-loader!./example/option-filtering-usage/option-filtering-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'option-filtering-usage.component.html',
    content: require('!!raw-loader!./example/option-filtering-usage/option-filtering-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'option-filtering-usage.module.ts',
    content: require('!!raw-loader!./example/option-filtering-usage/option-filtering-usage.module.md')
  },
];

export const filterDebounceUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'filter-debounce-usage.component.ts',
    content: require('!!raw-loader!./example/filter-debounce-usage/filter-debounce-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'filter-debounce-usage.component.html',
    content: require('!!raw-loader!./example/filter-debounce-usage/filter-debounce-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'filter-debounce-usage.module.ts',
    content: require('!!raw-loader!./example/filter-debounce-usage/filter-debounce-usage.module.md')
  }
];

export const filterDebounceTimeUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'filter-debounce-time-usage.component.ts',
    content: require('!!raw-loader!./example/filter-debounce-time-usage/filter-debounce-time-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'filter-debounce-time-usage.component.html',
    content: require('!!raw-loader!./example/filter-debounce-time-usage/filter-debounce-time-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'filter-debounce-time-usage.module.ts',
    content: require('!!raw-loader!./example/filter-debounce-time-usage/filter-debounce-time-usage.module.md')
  }
];

export const filterTextUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'filter-text-usage.component.ts',
    content: require('!!raw-loader!./example/filter-text-usage/filter-text-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'filter-text-usage.component.html',
    content: require('!!raw-loader!./example/filter-text-usage/filter-text-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'filter-text-usage.module.ts',
    content: require('!!raw-loader!./example/filter-text-usage/filter-text-usage.module.md')
  }
];

export const optionFilteringServerSideUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'option-filtering-server-side.component.ts',
    content: require('!!raw-loader!./example/option-filtering-server-side/option-filtering-server-side.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'option-filtering-server-side.component.html',
    content: require('!!raw-loader!./example/option-filtering-server-side/option-filtering-server-side.component.html')
  }
];

export const demoSnippet: any = {
  dropdownFiltering: require('!!raw-loader!./docs/filterable.md')
};
