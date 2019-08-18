import { ExampleFile, FileType } from 'helper-models';

export const serverSideBasicUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'custom-data-provider-usage.component.ts',
    content: require('!!raw-loader!./example/custom-data-provider-usage/custom-data-provider-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'custom-data-provider-usage.component.html',
    content: require('!!raw-loader!./example/custom-data-provider-usage/custom-data-provider-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'custom-data-provider-usage.module.ts',
    content: require('!!raw-loader!./example/custom-data-provider-usage/custom-data-provider-usage.module.md')
  }
];

export const serverSideBasicUsageWithMap: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'custom-data-provider-mapper-usage.component.ts',
    content: require('!!raw-loader!./example/custom-data-provider-mapper-usage/custom-data-provider-mapper-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'custom-data-provider-mapper-usage.component.html',
    content: require('!!raw-loader!./example/custom-data-provider-mapper-usage/custom-data-provider-mapper-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'custom-data-provider-mapper-usage.module.ts',
    content: require('!!raw-loader!./example/custom-data-provider-mapper-usage/custom-data-provider-mapper-usage.module.md')
  }
];

export const demoSnippet: any = {
  serverSideDataBindingModule: require('!!raw-loader!./docs/server-side-data-binding-module.md'),
  serverSideCustomDataProviderComponent: require('!!raw-loader!./docs/server-side-custom-data-provider.md'),
  customDataProviderComponent: require('!!raw-loader!./docs/server-side-custom-data-provider.md'),
  customDataProviderMarkup: require('!!raw-loader!./docs/server-side-data-binding-markup.md'),
  serverSideRequest: require('!!raw-loader!./docs/server-side-request.md'),
};
