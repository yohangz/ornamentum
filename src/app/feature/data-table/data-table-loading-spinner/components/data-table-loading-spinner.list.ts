import { ExampleFile, FileType } from '../../../../shared/models';

export const loadingSpinnerUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'loading-spinner-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/loading-spinner-usage/loading-spinner-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'loading-spinner-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/loading-spinner-usage/loading-spinner-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'loading-spinner-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/loading-spinner-usage/loading-spinner-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'sample-data.ts',
    content: require('!!raw-loader?lang=typescript!../../../../shared/data/sample-data.ts')
  }
];

export const demoSnippet: any = {
  loadingSpinner: require('!!raw-loader?lang=typescript!./docs/loading-spinner.md')
};


