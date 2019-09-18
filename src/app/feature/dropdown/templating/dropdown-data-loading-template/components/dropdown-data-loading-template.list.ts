import { ExampleFile, FileType } from 'helper-models';

export const dataLoadingTemplateUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'data-loading-template-usage.component.ts',
    content: require('!!raw-loader!./example/data-loading-template-usage/data-loading-template-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'data-loading-template-usage.component.html',
    content: require('!!raw-loader!./example/data-loading-template-usage/data-loading-template-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'data-loading-template-usage.module.ts',
    content: require('!!raw-loader!./example/data-loading-template-usage/data-loading-template-usage.module.md')
  }
];

export const demoSnippet: any = {
  template: require('!!raw-loader!./docs/template.md')
};
