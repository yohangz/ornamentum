import { ExampleFile, FileType } from 'helper-models';

export const itemFilteringUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'item-filtering-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/item-filtering-usage/item-filtering-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'item-filtering-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/item-filtering-usage/item-filtering-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'item-filtering-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/item-filtering-usage/item-filtering-usage.module.md')
  },
];

export const filterDebounceUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'filter-debounce-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/filter-debounce-usage/filter-debounce-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'filter-debounce-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/filter-debounce-usage/filter-debounce-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'filter-debounce-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/filter-debounce-usage/filter-debounce-usage.module.md')
  }
];

export const filterDebounceTimeUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'filter-debounce-time-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/filter-debounce-time-usage/filter-debounce-time-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'filter-debounce-time-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/filter-debounce-time-usage/filter-debounce-time-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'filter-debounce-time-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/filter-debounce-time-usage/filter-debounce-time-usage.module.md')
  }
];

export const filterTextUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'filter-text-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/filter-text-usage/filter-text-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'filter-text-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/filter-text-usage/filter-text-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'filter-text-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/filter-text-usage/filter-text-usage.module.md')
  }
];

export const itemFilteringServerSideUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'item-filtering-server-side.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/item-filtering-server-side/item-filtering-server-side.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'item-filtering-server-side.component.html',
    content: require('!!raw-loader?lang=html!./example/item-filtering-server-side/item-filtering-server-side.component.html')
  }
];

export const demoSnippet: any = {
  dropdownFiltering: require('!!raw-loader?lang=typescript!./docs/filterable.md')
};
