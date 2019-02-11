import { ExampleFile, FileType } from 'helper-models';

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
    type: FileType.HTML,
    name: 'column-sorting-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/column-sorting-usage/column-sorting-usage.component.html')
  }
];

export const sortOrderUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'sort-order-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/sort-order-usage/sort-order-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'sort-order-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/sort-order-usage/sort-order-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'sort-order-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/sort-order-usage/sort-order-usage.component.html')
  }
];

export const sortFieldUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'sort-field-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/sort-field-usage/sort-field-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'sort-field-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/sort-field-usage/sort-field-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'sort-field-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/sort-field-usage/sort-field-usage.component.html')
  }
];

export const multiColumnSortableUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'multi-column-sortable-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/multi-column-sortable-usage/' +
      'multi-column-sortable-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'multi-column-sortable-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/multi-column-sortable-usage/' +
      'multi-column-sortable-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'multi-column-sortable-usage.html',
    content: require('!!raw-loader?lang=html!./example/multi-column-sortable-usage/' +
      'multi-column-sortable-usage.component.html')
  }
];

export const serverSideSingleColumnSortableUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'server-side-single-column-sorting.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/server-side-single-column-sorting/' +
      'server-side-single-column-sorting.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'server-side-single-column-sorting.html',
    content: require('!!raw-loader?lang=html!./example/server-side-single-column-sorting/' +
      'server-side-single-column-sorting.component.html')
  }
];

export const serverSideMultiColumnSortableUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'server-side-multi-column-sorting.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/server-side-multi-column-sorting/' +
      'server-side-multi-column-sorting.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'server-side-multi-column-sorting.html',
    content: require('!!raw-loader?lang=html!./example/server-side-multi-column-sorting/' +
      'server-side-multi-column-sorting.component.html')
  }
];

export const demoSnippet: any = {
  sorting: require('!!raw-loader?lang=typescript!./docs/sorting.md')
};
