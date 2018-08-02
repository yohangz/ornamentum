import { ExampleFile, FileType } from '../../../../shared/models';

export const dataTableTranslationsNoDataUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'data-table-translations-no-data-usage.module.ts',
    content: require(
      '!!raw-loader?lang=typescript!./example/data-table-translations-no-data-usage/data-table-translations-no-data-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'data-table-translations-no-data-usage.component.ts',
    content: require(
      '!!raw-loader?lang=typescript!./example/data-table-translations-no-data-usage/data-table-translations-no-data-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'data-table-translations-no-data-usage.component.html',
    content: require(
      '!!raw-loader?lang=html!./example/data-table-translations-no-data-usage/data-table-translations-no-data-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'data-table-translations-no-data-usage.data.ts',
    content: require(
      '!!raw-loader?lang=typescript!./example/data-table-translations-no-data-usage/data-table-translations-no-data-usage.data.ts')
  }
];

export const dataTableTranslationsPaginationUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'data-table-translations-pagination-usage.module.ts',
    content: require(
      '!!raw-loader?lang=typescript!./example/data-table-translations-pagination-usage/data-table-translations-pagination-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'data-table-translations-pagination-usage.component.ts',
    content: require(
      '!!raw-loader?lang=typescript!./example/data-table-translations-pagination-usage/' +
      'data-table-translations-pagination-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'data-table-translations-pagination-usage.component.html',
    content: require(
      '!!raw-loader?lang=html!./example/data-table-translations-pagination-usage/data-table-translations-pagination-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'data-table-translations-pagination-usage.data.ts',
    content: require(
      '!!raw-loader?lang=typescript!./example/data-table-translations-pagination-usage/data-table-translations-pagination-usage.data.ts')
  }
];

