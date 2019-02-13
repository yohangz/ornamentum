import { ExampleFile, FileType } from 'helper-models';

export const paginationUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'pagination-usage.component.ts',
    content: require('!!raw-loader!./example/pagination-usage/pagination-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'pagination-usage.component.html',
    content: require('!!raw-loader!./example/pagination-usage/pagination-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'pagination-usage.module.ts',
    content: require('!!raw-loader!./example/pagination-usage/pagination-usage.module.md')
  }
];

export const pageUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'page-usage.component.ts',
    content: require('!!raw-loader!./example/page-usage/page-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'page-usage.component.html',
    content: require('!!raw-loader!./example/page-usage/page-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'page-usage.module.ts',
    content: require('!!raw-loader!./example/page-usage/page-usage.module.md')
  }
];

export const limitUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'limit-usage.component.ts',
    content: require('!!raw-loader!./example/limit-usage/limit-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'limit-usage.component.html',
    content: require('!!raw-loader!./example/limit-usage/limit-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'limit-usage.module.ts',
    content: require('!!raw-loader!./example/limit-usage/limit-usage.module.md')
  }
];

export const demoSnippet: any = {
  pagination: require('!!raw-loader!./docs/pageable.md')
};
