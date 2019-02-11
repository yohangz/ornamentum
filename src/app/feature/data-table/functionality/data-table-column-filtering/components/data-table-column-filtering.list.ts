import { ExampleFile, FileType } from 'helper-models';

export const columnFilteringUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'column-filtering-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/column-filtering-usage/column-filtering-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'column-filtering-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/column-filtering-usage/column-filtering-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'column-filtering-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/column-filtering-usage/column-filtering-usage.component.html')
  }
];

export const columnFilteringDropdownUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'column-filtering-dropdown-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/column-filtering-dropdown-usage/column-filtering-dropdown-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'column-filtering-dropdown-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/column-filtering-dropdown-usage/column-filtering-dropdown-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'column-filtering-dropdown-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/column-filtering-dropdown-usage/column-filtering-dropdown-usage.component.html')
  }
];

export const columnFilteringTextBoxUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'column-filtering-text-box-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/column-filtering-text-box-usage/column-filtering-text-box-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'column-filtering-text-box-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/column-filtering-text-box-usage/column-filtering-text-box-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'column-filtering-text-box-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/column-filtering-text-box-usage/column-filtering-text-box-usage.component.html')
  }
];

export const serverSideColumnFilteringTextBoxUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'server-side-text-box-filtering-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/server-side-text-box-filtering-usage/server-side-text-box-filtering-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'server-side-text-box-filtering-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/server-side-text-box-filtering-usage/server-side-text-box-filtering-usage.component.html')
  }
];

export const serverSideColumnFilteringDropdownUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'server-side-dropdown-filtering-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/server-side-dropdown-filtering-usage/server-side-dropdown-filtering-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'server-side-dropdown-filtering-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/server-side-dropdown-filtering-usage/server-side-dropdown-filtering-usage.component.html')
  }
];

export const demoSnippet: any = {
  filterable: require('!!raw-loader?lang=typescript!./docs/filtering.md')
};
