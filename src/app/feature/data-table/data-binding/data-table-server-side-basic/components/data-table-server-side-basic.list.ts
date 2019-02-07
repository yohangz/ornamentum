import { ExampleFile, FileType } from 'helper-models';

export const serverSideBasicUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'server-side-basic-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/server-side-basic-usage/server-side-basic-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'server-side-basic-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/server-side-basic-usage/server-side-basic-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'server-side-basic-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/server-side-basic-usage/server-side-basic-usage.component.html')
  }
];

export const demoSnippet: any = {
  serverSideDataBinding: require('!!raw-loader?lang=typescript!./docs/server-side-data-binding.md'),
  dataFetchMethod: require('!!raw-loader?lang=typescript!./docs/data-fetch-method.md')
};
