import { ExampleFile, FileType } from '../../../../shared/models';

export const tableHeaderDetailsUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'table-header-details-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/table-header-details-usage/table-header-details-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'table-header-details-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/table-header-details-usage/table-header-details-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'table-header-details-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/table-header-details-usage/table-header-details-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'sample-data.ts',
    content: require('!!raw-loader?lang=typescript!../../../../shared/data/sample-data.ts')
  }
];

export const tableHeaderDetailsTitleUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'table-header-details-title-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/table-header-details-title-usage/table-header-details-title-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'table-header-details-title-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/table-header-details-title-usage/' +
      'table-header-details-title-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'table-header-details-title-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/table-header-details-title-usage/' +
      'table-header-details-title-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'sample-data.ts',
    content: require('!!raw-loader?lang=typescript!../../../../shared/data/sample-data.ts')
  }
];

export const tableHeaderDetailsShowRefreshBtnUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'table-header-details-show-refresh-btn-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/table-header-details-show-refresh-btn-usage/' +
      'table-header-details-show-refresh-btn-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'table-header-details-show-refresh-btn-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/table-header-details-show-refresh-btn-usage/' +
      'table-header-details-show-refresh-btn-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'table-header-details-show-refresh-btn-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/table-header-details-show-refresh-btn-usage/' +
      'table-header-details-show-refresh-btn-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'sample-data.ts',
    content: require('!!raw-loader?lang=typescript!../../../../shared/data/sample-data.ts')
  }
];

export const tableHeaderDetailsShowColumnSelectorUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'table-header-details-show-column-selector-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/table-header-details-show-column-selector-usage/' +
      'table-header-details-show-column-selector-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'table-header-details-show-column-selector-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/table-header-details-show-column-selector-usage/' +
      'table-header-details-show-column-selector-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'table-header-details-show-column-selector-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/table-header-details-show-column-selector-usage/' +
      'table-header-details-show-column-selector-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'sample-data.ts',
    content: require('!!raw-loader?lang=typescript!../../../../shared/data/sample-data.ts')
  }
];

export const demoSnippet: any = {
  headerDetails: require('!!raw-loader?lang=typescript!./docs/show-header.md')
};

