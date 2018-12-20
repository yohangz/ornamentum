import { ExampleFile, FileType } from '../../../../shared/models';

export const columnSortingUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'column-sorting-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/column-sorting-usage/column-sorting-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'column-sorting-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/column-sorting-usage/column-sorting-usage.component.ts')
  },
  {
    type: FileType.TS,
    name: 'sample-data.ts',
    content: require('!!raw-loader?lang=typescript!../../../../shared/data/sample-data.ts')
  },
  {
    type: FileType.HTML,
    name: 'column-sorting-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/column-sorting-usage/column-sorting-usage.component.html')
  }
];

export const columnSortingUsageWithSortOrder: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'column-sorting-sort-order-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/column-sorting-sort-order-usage/column-sorting-sort-order-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'column-sorting-sort-order-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/column-sorting-sort-order-usage/column-sorting-sort-order-usage.component.ts')
  },
  {
    type: FileType.TS,
    name: 'sample-data.ts',
    content: require('!!raw-loader?lang=typescript!../../../../shared/data/sample-data.ts')
  },
  {
    type: FileType.HTML,
    name: 'column-sorting-sort-order-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/column-sorting-sort-order-usage/column-sorting-sort-order-usage.component.html')
  }
];

export const columnSortingUsageWithSortField: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'column-sorting-sort-field-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/column-sorting-sort-field-usage/column-sorting-sort-field-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'column-sorting-sort-field-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/column-sorting-sort-field-usage/column-sorting-sort-field-usage.component.ts')
  },
  {
    type: FileType.TS,
    name: 'sample-data.ts',
    content: require('!!raw-loader?lang=typescript!../../../../shared/data/sample-data.ts')
  },
  {
    type: FileType.HTML,
    name: 'column-sorting-sort-field-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/column-sorting-sort-field-usage/column-sorting-sort-field-usage.component.html')
  }
];

export const columnSortingUsageWithMultiColumnSortable: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'column-sorting-multi-column-sortable-usage.module.ts',
    content: require(
      '!!raw-loader?lang=typescript!./example/column-sorting-multi-column-sortable-usage/' +
      'column-sorting-multi-column-sortable-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'column-sorting-multi-column-sortable-usage.component.ts',
    content: require(
      '!!raw-loader?lang=typescript!./example/column-sorting-multi-column-sortable-usage/' +
      'column-sorting-multi-column-sortable-usage.component.ts')
  },
  {
    type: FileType.TS,
    name: 'sample-data.ts',
    content: require('!!raw-loader?lang=typescript!../../../../shared/data/sample-data.ts')
  },
  {
    type: FileType.HTML,
    name: 'app-column-sorting-multi-column-sortable-usage.html',
    content: require('!!raw-loader?lang=html!./example/column-sorting-multi-column-sortable-usage/' +
      'column-sorting-multi-column-sortable-usage.component.html')
  }
];

export const demoSnippet: any = {
  sorting: require('!!raw-loader?lang=typescript!./docs/sorting.md')
};


