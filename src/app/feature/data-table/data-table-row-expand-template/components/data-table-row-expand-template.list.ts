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
  }
];

export const rowExpandTemplateDetailView: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'row-expand-template-detail-view.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/row-expand-template-usage/row-expand-template-detail-view/' +
      'row-expand-template-detail-view.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'row-expand-template-detail-view.component.html',
    content: require('!!raw-loader?lang=html!./example/row-expand-template-usage/row-expand-template-detail-view/' +
      'row-expand-template-detail-view.component.html')
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
  }
];

export const rowExpandLoadingSpinnerDetailView: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'row-expand-loading-spinner-detail-view.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/row-expand-loading-spinner-usage/row-expand-loading-spinner-detail-view/' +
      'row-expand-loading-spinner-detail-view.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'row-expand-loading-spinner-detail-view.component.html',
    content: require('!!raw-loader?lang=html!./example/row-expand-loading-spinner-usage/row-expand-loading-spinner-detail-view/' +
      'row-expand-loading-spinner-detail-view.component.html')
  }
];

export const demoSnippet: any = {
  base_template: require('!!raw-loader?lang=typescript!./docs/base-template.md'),
  expand_template: require('!!raw-loader?lang=typescript!./docs/expand-template.md'),
  loading_spinner_template: require('!!raw-loader?lang=typescript!./docs/loading-spinner-template.md')
};
