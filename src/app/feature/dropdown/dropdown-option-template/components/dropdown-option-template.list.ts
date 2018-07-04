import { ExampleFile, FileType } from '../../../../shared/models';

export const optionTemplateUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'option-template-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/option-template-usage/option-template-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'option-template-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/option-template-usage/option-template-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'option-template-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/option-template-usage/option-template-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'option-template-usage.data.ts',
    content: require('!!raw-loader?lang=typescript!./example/option-template-usage/option-template-usage.data.ts')
  }
];
