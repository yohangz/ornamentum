import { ExampleFile, FileType } from 'helper-models';

export const paginationUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'pagination-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/pagination-usage/pagination-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'pagination-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/pagination-usage/pagination-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'pagination-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/pagination-usage/pagination-usage.component.html')
  }
];

export const pageUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'page-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/page-usage/page-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'page-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/page-usage/page-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'page-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/page-usage/page-usage.component.html')
  }
];

export const limitUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'limit-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/limit-usage/limit-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'limit-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/limit-usage/limit-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'limit-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/limit-usage/limit-usage.component.html')
  }
];

export const demoSnippet: any = {
  pagination: require('!!raw-loader?lang=typescript!./docs/pageable.md')
};
