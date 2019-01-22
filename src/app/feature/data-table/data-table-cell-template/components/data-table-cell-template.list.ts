import { ExampleFile, FileType } from '../../../../shared/models';

export const cellTemplateUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'cell-template-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/cell-template-usage/cell-template-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'cell-template-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/cell-template-usage/cell-template-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'cell-template-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/cell-template-usage/cell-template-usage.component.html')
  }
];

export const demoSnippet: any = {
  base_template: require('!!raw-loader?lang=typescript!./docs/base-template.md'),
  cell_template: require('!!raw-loader?lang=typescript!./docs/cell-template.md'),
  column_property_template: require('!!raw-loader?lang=typescript!./docs/column-property-template.md'),
  row_property_template: require('!!raw-loader?lang=typescript!./docs/row-property-template.md'),
  row_span_property_template: require('!!raw-loader?lang=typescript!./docs/row-span-property-template.md'),
  span_index_property_template: require('!!raw-loader?lang=typescript!./docs/span-index-property-template.md')
};
