import { ExampleFile, FileType } from '../../../../shared/models';

export const paginationUsage: ExampleFile[] = [
  {
    type: FileType.HTML,
    name: 'pagination-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/pagination-usage/pagination-usage.component.html')
  },
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
    type: FileType.TS,
    name: 'sample-data.ts',
    content: require('!!raw-loader?lang=typescript!../../../../shared/data/sample-data.ts')
  }
];

export const paginationUsageWithPage: ExampleFile[] = [
  {
    type: FileType.HTML,
    name: 'pagination-page-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/pagination-page-usage/pagination-page-usage.component.html')
  },
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
    type: FileType.TS,
    name: 'sample-data.ts',
    content: require('!!raw-loader?lang=typescript!../../../../shared/data/sample-data.ts')
  }
];

