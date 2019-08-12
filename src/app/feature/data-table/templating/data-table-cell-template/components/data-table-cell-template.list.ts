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
    name: 'cell-template-usage-avatar.component.ts',
    content: require('!!raw-loader!./example/cell-template-usage-avatar/cell-template-usage-avatar.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'cell-template-usage-avatar.component.html',
    content: require('!!raw-loader!./example/cell-template-usage-avatar/cell-template-usage-avatar.component.html')
  },
  {
    type: FileType.TS,
    name: 'cell-template-usage-avatar.module.ts',
    content: require('!!raw-loader!./example/cell-template-usage-avatar/cell-template-usage-avatar.module.md')
  }
];

export const demoSnippet: any = {
  base_template: require('!!raw-loader!./docs/base-template.md'),
  cell_template: require('!!raw-loader!./docs/cell-template.md'),
  column_property_template: require('!!raw-loader!./docs/column-property-template.md'),
  row_property_template: require('!!raw-loader!./docs/row-property-template.md'),
  row_span_property_template: require('!!raw-loader!./docs/row-span-property-template.md'),
  span_index_property_template: require('!!raw-loader!./docs/span-index-property-template.md')
};
