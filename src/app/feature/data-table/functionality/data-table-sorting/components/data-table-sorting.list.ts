import { ExampleFile, FileType } from 'helper-models';

export const sortingUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'sorting-usage.component.ts',
    content: require('!!raw-loader!./example/sorting-usage/sorting-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'sorting-usage.component.html',
    content: require('!!raw-loader!./example/sorting-usage/sorting-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'sorting-usage.module.ts',
    content: require('!!raw-loader!./example/sorting-usage/sorting-usage.module.md')
  }
];

export const sortOrderUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'sort-order-usage.component.ts',
    content: require('!!raw-loader!./example/sort-order-usage/sort-order-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'sort-order-usage.component.html',
    content: require('!!raw-loader!./example/sort-order-usage/sort-order-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'sort-order-usage.module.ts',
    content: require('!!raw-loader!./example/sort-order-usage/sort-order-usage.module.md')
  }
];

export const sortFieldUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'sort-field-usage.component.ts',
    content: require('!!raw-loader!./example/sort-field-usage/sort-field-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'sort-field-usage.component.html',
    content: require('!!raw-loader!./example/sort-field-usage/sort-field-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'sort-field-usage.module.ts',
    content: require('!!raw-loader!./example/sort-field-usage/sort-field-usage.module.md')
  }
];

export const multiColumnSortableUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'multi-column-sortable-usage.component.ts',
    content: require('!!raw-loader!./example/multi-column-sortable-usage/multi-column-sortable-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'multi-column-sortable-usage.html',
    content: require('!!raw-loader!./example/multi-column-sortable-usage/multi-column-sortable-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'multi-column-sortable-usage.module.ts',
    content: require('!!raw-loader!./example/multi-column-sortable-usage/multi-column-sortable-usage.module.md')
  }
];

export const demoSnippet: any = {
  sorting: require('!!raw-loader!./docs/sorting.md'),
  multiColumnSorting: require('!!raw-loader!./docs/multi-column-sorting.md')
};
