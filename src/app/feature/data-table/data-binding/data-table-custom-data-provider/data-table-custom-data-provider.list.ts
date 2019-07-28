import { ExampleFile, FileType } from 'helper-models';

export const serverSideBasicUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'custom-data-provider.component.ts',
    content: require('!!raw-loader!./example/custom-data-provider/custom-data-provider.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'custom-data-provider.component.html',
    content: require('!!raw-loader!./example/custom-data-provider/custom-data-provider.component.html')
  },
  {
    type: FileType.TS,
    name: 'custom-data-provider.module.ts',
    content: require('!!raw-loader!./example/custom-data-provider/custom-data-provider.module.md')
  }
];

export const demoSnippet: any = {
  serverSideDataBindingModule: require('!!raw-loader!./docs/server-side-data-binding-module.md'),
  serverSideCustomDataProviderComponent: require('!!raw-loader!./docs/server-side-custom-data-provider.md'),
  customDataProviderComponent: require('!!raw-loader!./docs/server-side-custom-data-provider.md'),
  customDataProviderMarkup: require('!!raw-loader!./docs/server-side-data-binding-markup.md'),
  serverSideRequest: require('!!raw-loader!./docs/server-side-request.md'),
};
