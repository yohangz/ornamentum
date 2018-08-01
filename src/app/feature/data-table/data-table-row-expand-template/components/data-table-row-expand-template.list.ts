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

