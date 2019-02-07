import { ExampleFile, FileType } from 'helper-models';

export const headerDetailsUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'header-details-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/header-details-usage/header-details-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'header-details-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/header-details-usage/header-details-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'header-details-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/header-details-usage/header-details-usage.component.html')
  }
];

export const titleUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'title-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/title-usage/title-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'title-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/title-usage/title-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'title-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/title-usage/title-usage.component.html')
  }
];

export const showRefreshButtonUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'show-refresh-btn-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/show-refresh-button-usage/show-refresh-button-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'show-refresh-btn-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/show-refresh-button-usage/show-refresh-button-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'show-refresh-btn-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/show-refresh-button-usage/show-refresh-button-usage.component.html')
  }
];

export const showColumnSelectorUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'show-column-selector-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/show-column-selector-usage/show-column-selector-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'show-column-selector-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/show-column-selector-usage/show-column-selector-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'show-column-selector-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/show-column-selector-usage/show-column-selector-usage.component.html')
  }
];

export const demoSnippet: any = {
  headerDetails: require('!!raw-loader?lang=typescript!./docs/show-header.md')
};
