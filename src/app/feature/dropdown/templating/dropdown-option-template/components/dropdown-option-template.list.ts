import { ExampleFile, FileType } from 'helper-models';

export const optionTemplateUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'option-template-usage.component.ts',
    content: require('!!raw-loader!./example/option-template-usage/option-template-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'option-template-usage.component.html',
    content: require('!!raw-loader!./example/option-template-usage/option-template-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'option-template-usage.module.ts',
    content: require('!!raw-loader!./example/option-template-usage/option-template-usage.module.md')
  }
];

export const demoSnippet: any = {
  template: require('!!raw-loader!./docs/template.md')
};
