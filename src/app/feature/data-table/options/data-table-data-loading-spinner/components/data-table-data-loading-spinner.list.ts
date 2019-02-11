import { ExampleFile, FileType } from 'helper-models';

export const dataLoadingSpinnerUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'data-loading-spinner-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/data-loading-spinner-usage/data-loading-spinner-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'data-loading-spinner-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/data-loading-spinner-usage/data-loading-spinner-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'data-loading-spinner-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/data-loading-spinner-usage/data-loading-spinner-usage.module.md')
  }
];

export const demoSnippet: any = {
  showLoadingSpinner: require('!!raw-loader?lang=typescript!./docs/show-loading-spinner.md')
};
