import { ExampleFile, FileType } from 'helper-models';

export const filteringUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'filtering-usage.component.ts',
    content: require('!!raw-loader!./example/filtering-usage/filtering-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'filtering-usage.component.html',
    content: require('!!raw-loader!./example/filtering-usage/filtering-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'filtering-usage.module.ts',
    content: require('!!raw-loader!./example/filtering-usage/filtering-usage.module.md')
  }
];

export const filteringDropdownUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'filtering-dropdown-usage.component.ts',
    content: require('!!raw-loader!./example/filtering-dropdown-usage/filtering-dropdown-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'filtering-dropdown-usage.component.html',
    content: require('!!raw-loader!./example/filtering-dropdown-usage/filtering-dropdown-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'filtering-dropdown-usage.module.ts',
    content: require('!!raw-loader!./example/filtering-dropdown-usage/filtering-dropdown-usage.module.md')
  }
];

export const filteringTextBoxUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'filtering-text-box-usage.component.ts',
    content: require('!!raw-loader!./example/filtering-text-box-usage/filtering-text-box-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'filtering-text-box-usage.component.html',
    content: require('!!raw-loader!./example/filtering-text-box-usage/filtering-text-box-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'filtering-text-box-usage.module.ts',
    content: require('!!raw-loader!./example/filtering-text-box-usage/filtering-text-box-usage.module.md')
  }
];

export const serverSideFilteringTextBoxUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'server-side-text-box-filtering-usage.component.ts',
    content: require('!!raw-loader!./example/server-side-text-box-filtering-usage/server-side-text-box-filtering-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'server-side-text-box-filtering-usage.component.html',
    content: require('!!raw-loader!./example/server-side-text-box-filtering-usage/server-side-text-box-filtering-usage.component.html')
  }
];

export const serverSideFilteringDropdownUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'server-side-dropdown-filtering-usage.component.ts',
    content: require('!!raw-loader!./example/server-side-dropdown-filtering-usage/server-side-dropdown-filtering-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'server-side-dropdown-filtering-usage.component.html',
    content: require('!!raw-loader!./example/server-side-dropdown-filtering-usage/server-side-dropdown-filtering-usage.component.html')
  }
];

export const demoSnippet: any = {
  filterable: require('!!raw-loader!./docs/filtering.md')
};
