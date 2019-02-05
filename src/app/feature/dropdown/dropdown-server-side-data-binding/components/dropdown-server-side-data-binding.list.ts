import { ExampleFile, FileType } from 'helper-models';

export const serverSideDataBindingUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'server-side-data-binding-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/server-side-data-binding-usage/server-side-data-binding-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'server-side-data-binding-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/server-side-data-binding-usage/server-side-data-binding-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'server-side-data-binding-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/server-side-data-binding-usage/server-side-data-binding-usage.component.html')
  }
];

export const demoSnippet: any = {
  serverSideDataBinding: require('!!raw-loader?lang=typescript!./docs/server-side-data-binding.md'),
  dataFetchMethod: require('!!raw-loader?lang=typescript!./docs/data-fetch-method.md')
};
