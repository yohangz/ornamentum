import { ExampleFile, FileType } from '../../../../shared/models';

export const rowExpandTemplateUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'row-expand-template-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/row-expand-template-usage/row-expand-template-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'row-expand-template-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/row-expand-template-usage/row-expand-template-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'row-expand-template-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/row-expand-template-usage/row-expand-template-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'sample-data.ts',
    content: require('!!raw-loader?lang=typescript!../../../../shared/data/sample-data.ts')
  }
];

export const rowExpandOnClickUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'row-expand-on-click-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/row-expand-on-click-usage/row-expand-on-click-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'row-expand-on-click-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/row-expand-on-click-usage/row-expand-on-click-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'row-expand-on-click-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/row-expand-on-click-usage/row-expand-on-click-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'sample-data.ts',
    content: require('!!raw-loader?lang=typescript!../../../../shared/data/sample-data.ts')
  }
];

export const rowExpandLoadingSpinnerUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'row-expand-loading-spinner-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/row-expand-loading-spinner-usage/row-expand-loading-spinner-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'row-expand-loading-spinner-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/row-expand-loading-spinner-usage/row-expand-loading-spinner-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'row-expand-loading-spinner-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/row-expand-loading-spinner-usage/row-expand-loading-spinner-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'sample-data.ts',
    content: require('!!raw-loader?lang=typescript!../../../../shared/data/sample-data.ts')
  }
];

export const rowExpandLoadingSpinnerDetailView: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'row-expand-expandable-detail-view.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/row-expand-loading-spinner-usage/row-expand-expandable-detail-view/' +
      'row-expand-expandable-detail-view.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'row-expand-loading-spinner-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/row-expand-loading-spinner-usage/row-expand-expandable-detail-view/' +
      'row-expand-expandable-detail-view.component.html')
  }
];

export const demoSnippet: any = {
  base_template: require('!!raw-loader?lang=typescript!./docs/base-template.md'),
  expand_template: require('!!raw-loader?lang=typescript!./docs/expand-template.md'),
  loading_spinner_template: require('!!raw-loader?lang=typescript!./docs/loading-spinner-template.md')
};
