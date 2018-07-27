import { ExampleFile, FileType } from '../../../../shared/models';

export const limitWithPaginationUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'limit-with-pagination-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/limit-with-pagination-usage/limit-with-pagination-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'limit-with-pagination-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/limit-with-pagination-usage/limit-with-pagination-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'limit-with-pagination-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/limit-with-pagination-usage/limit-with-pagination-usage.component.html')
  },
  // {
  //   type: FileType.JSON,
  //   name: 'sample-data.json',
  //   content: require('!!raw-loader?lang=json!../../../../shared/data/sample-data.json')
  // }
];

export const limitWithoutPaginationUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'limit-without-pagination-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/limit-without-pagination-usage/limit-without-pagination-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'limit-without-pagination-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/limit-without-pagination-usage/limit-without-pagination-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'limit-without-pagination-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/limit-without-pagination-usage/limit-without-pagination-usage.component.html')
  },
  // {
  //   type: FileType.JSON,
  //   name: 'sample-data.json',
  //   content: require('!!raw-loader?lang=json!../../../../shared/data/sample-data.json')
  // }
];

export const paginationWithoutLimitUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'pagination-without-limit-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/pagination-without-limit-usage/pagination-without-limit-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'pagination-without-limit-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/pagination-without-limit-usage/pagination-without-limit-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'pagination-without-limit-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/pagination-without-limit-usage/pagination-without-limit-usage.component.html')
  },
  // {
  //   type: FileType.JSON,
  //   name: 'sample-data.json',
  //   content: require('!!raw-loader?lang=json!../../../../shared/data/sample-data.json')
  // }
];

export const withoutLimitAndPaginationUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'without-limit-and-pagination-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/without-limit-and-pagination-usage/without-limit-and-pagination-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'without-limit-and-pagination-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/without-limit-and-pagination-usage/without-limit-and-pagination-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'without-limit-and-pagination-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/without-limit-and-pagination-usage/without-limit-and-pagination-usage.component.html')
  },
  // {
  //   type: FileType.JSON,
  //   name: 'sample-data.json',
  //   content: require('!!raw-loader?lang=json!../../../../shared/data/sample-data.json')
  // }
];
