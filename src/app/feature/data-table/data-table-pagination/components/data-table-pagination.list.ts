import { ExampleFile, FileType } from '../../../../shared/models';

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

export const paginationUsageWithPage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'pagination-page-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/pagination-page-usage/pagination-page-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'pagination-page-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/pagination-page-usage/pagination-page-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'pagination-page-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/pagination-page-usage/pagination-page-usage.component.html')
  }
];

export const paginationUsageWithLimit: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'pagination-limit-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/pagination-limit-usage/pagination-limit-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'pagination-limit-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/pagination-limit-usage/pagination-limit-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'pagination-limit-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/pagination-limit-usage/pagination-limit-usage.component.html')
  }
];

export const demoSnippet: any = {
  pagination: require('!!raw-loader?lang=typescript!./docs/pageable.md')
};
