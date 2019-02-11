import { ExampleFile, FileType } from 'helper-models';

export const optionGroupHeaderTemplateUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'option-group-header-template-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/option-group-header-template-usage/option-group-header-template-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'option-group-header-template-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/option-group-header-template-usage/option-group-header-template-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'option-group-header-template-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/option-group-header-template-usage/option-group-header-template-usage.module.md')
  }
];

export const demoSnippet: any = {
  template: require('!!raw-loader?lang=typescript!./docs/template.md')
};
