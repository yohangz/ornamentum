import { ExampleFile, FileType } from '../../../../shared/models';

export const noRecordsTemplateUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'no-records-template-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/no-records-template-usage/no-records-template-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'no-records-template-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/no-records-template-usage/no-records-template-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'no-records-template-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/no-records-template-usage/no-records-template-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'sample-data.ts',
    content: require('!!raw-loader?lang=typescript!../../../../shared/data/sample-data.ts')
  }
];

