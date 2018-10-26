import { ExampleFile, FileType } from '../../../../shared/models';

export const dataTableTranslationsUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'data-table-translations-usage.module.ts',
    content:
      require(
        '!!raw-loader?lang=typescript!./example/data-table-translations-usage/data-table-translations-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'data-table-translations-usage.component.ts',
    content:
      require(
        '!!raw-loader?lang=typescript!./example/data-table-translations-usage/data-table-translations-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'data-table-translations-usage.component.html',
    content:
      require('!!raw-loader?lang=html!./example/data-table-translations-usage/data-table-translations-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'sample-data.ts',
    content: require('!!raw-loader?lang=typescript!../../../../shared/data/sample-data.ts')
  }
];

export const dataTableTranslationsNoDataUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'data-table-translations-no-data-usage.module.ts',
    content:
      require(
        '!!raw-loader?lang=typescript!./example/data-table-translations-no-data-usage/data-table-translations-no-data-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'data-table-translations-no-data-usage.component.ts',
    content:
      require(
        '!!raw-loader?lang=typescript!./example/data-table-translations-no-data-usage/data-table-translations-no-data-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'data-table-translations-no-data-usage.component.html',
    content:
      require('!!raw-loader?lang=html!./example/data-table-translations-no-data-usage/data-table-translations-no-data-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'sample-data.ts',
    content: require('!!raw-loader?lang=typescript!../../../../shared/data/sample-data.ts')
  }
];

export const dataTableTranslationsPaginationUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'data-table-translations-pagination-usage.module.ts',
    content:
      require(
        '!!raw-loader?lang=typescript!./example/data-table-translations-pagination-usage/' +
        'data-table-translations-pagination-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'data-table-translations-pagination-usage.component.ts',
    content:
      require(
        '!!raw-loader?lang=typescript!./example/data-table-translations-pagination-usage/' +
        'data-table-translations-pagination-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'data-table-translations-pagination-usage.component.html',
    content:
      require(
        '!!raw-loader?lang=html!./example/data-table-translations-pagination-usage/data-table-translations-pagination-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'sample-data.ts',
    content: require('!!raw-loader?lang=typescript!../../../../shared/data/sample-data.ts')
  }
];

export const demoSnippet: any = {
  translations: require('!!raw-loader?lang=typescript!./docs/translations.md')
};

