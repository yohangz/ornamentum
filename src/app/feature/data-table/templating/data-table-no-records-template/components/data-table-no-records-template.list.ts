import { ExampleFile, FileType } from 'helper-models';

export const noRecordsTemplateUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'no-records-template-usage.component.ts',
    content: require('!!raw-loader!./example/no-records-template-usage/no-records-template-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'no-records-template-usage.component.html',
    content: require('!!raw-loader!./example/no-records-template-usage/no-records-template-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'no-records-template-usage.module.ts',
    content: require('!!raw-loader!./example/no-records-template-usage/no-records-template-usage.module.md')
  }
];

export const demoSnippet: any = {
  template: require('!!raw-loader!./docs/template.md'),
  stylishTemplate: require('!!raw-loader!./docs/stylish-template.md')
};
