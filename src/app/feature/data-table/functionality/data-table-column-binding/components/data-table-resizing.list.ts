import { ExampleFile, FileType } from 'helper-models';

export const columnBindingUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'column-binding-usage.component.ts',
    content: require('!!raw-loader!./example/column-binding-usage/column-binding-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'column-binding-usage.component.html',
    content: require('!!raw-loader!./example/column-binding-usage/column-binding-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'column-binding-usage.module.ts',
    content: require('!!raw-loader!./example/column-binding-usage/column-binding-usage.module.md')
  }
];

export const showIndexColumnUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'show-index-column-usage.component.ts',
    content: require('!!raw-loader!./example/show-index-column-usage/show-index-column-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'show-index-column-usage.component.html',
    content: require('!!raw-loader!./example/show-index-column-usage/show-index-column-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'show-index-column-usage.module.ts',
    content: require('!!raw-loader!./example/show-index-column-usage/show-index-column-usage.module.md')
  }
];

export const demoSnippet: any = {
  resizable: require('!!raw-loader!./docs/columnBinding.md')
};
