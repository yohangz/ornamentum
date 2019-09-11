import { ExampleFile, FileType } from 'helper-models';

export const cellTemplateUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'cell-template-usage.component.ts',
    content: require('!!raw-loader!./example/cell-template-usage/cell-template-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'cell-template-usage.component.html',
    content: require('!!raw-loader!./example/cell-template-usage/cell-template-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'cell-template-usage.module.ts',
    content: require('!!raw-loader!./example/cell-template-usage/cell-template-usage.module.md')
  }
];

export const cellTemplateUsageAvatar: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'cell-template-avatar-usage.component.ts',
    content: require('!!raw-loader!./example/cell-template-avatar-usage/cell-template-avatar-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'cell-template-avatar-usage.component.html',
    content: require('!!raw-loader!./example/cell-template-avatar-usage/cell-template-avatar-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'cell-template-avatar-usage.module.ts',
    content: require('!!raw-loader!./example/cell-template-avatar-usage/cell-template-avatar-usage.module.md')
  }
];
export const cellTemplateRowSpanUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'cell-template-row-span-usage.component.ts',
    content: require('!!raw-loader!./example/cell-template-rowspan/cell-template-rowspan.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'cell-template-rowspan.component.html',
    content: require('!!raw-loader!./example/cell-template-rowspan/cell-template-rowspan.component.html')
  },
  {
    type: FileType.TS,
    name: 'cell-template-rowspan.module.ts',
    content: require('!!raw-loader!./example/cell-template-rowspan/cell-template-rowspan.module.md')
  }
];
export const demoSnippet: any = {
  baseTemplate: require('!!raw-loader!./docs/base-template.md'),
  cellTemplate: require('!!raw-loader!./docs/cell-template.md'),
  columnPropertyTemplate: require('!!raw-loader!./docs/column-property-template.md'),
  rowPropertyTemplate: require('!!raw-loader!./docs/row-property-template.md'),
  rowSpanPropertyTemplate: require('!!raw-loader!./docs/row-span-property-template.md'),
  spanIndexPropertyTemplate: require('!!raw-loader!./docs/span-index-property-template.md')
};
