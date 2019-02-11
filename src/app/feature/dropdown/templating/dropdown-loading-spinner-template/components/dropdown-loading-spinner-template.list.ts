import { ExampleFile, FileType } from 'helper-models';

export const loadingSpinnerTemplateUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'loading-spinner-template-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/loading-spinner-template-usage/loading-spinner-template-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'loading-spinner-template-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/loading-spinner-template-usage/loading-spinner-template-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'loading-spinner-template-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/loading-spinner-template-usage/loading-spinner-template-usage.module.md')
  }
];

export const demoSnippet: any = {
  template: require('!!raw-loader?lang=typescript!./docs/template.md')
};
