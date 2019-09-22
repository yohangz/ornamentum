import { ExampleFile, FileType } from 'helper-models';

export const dataLimitUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'lazy-loading-usage.component.ts',
    content: require('!!raw-loader!./example/lazy-loading-usage/lazy-loading-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'lazy-loading-usage.component.html',
    content: require('!!raw-loader!./example/lazy-loading-usage/lazy-loading-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'dropdown-lazy-loading-usage.module.ts',
    content: require('!!raw-loader!./example/lazy-loading-usage/lazy-loading-usage.module.md')
  }
];

export const demoSnippet: any = {
  limit: require('!!raw-loader!./docs/limit.md')
};

export const pageUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'lazy-loading-limit-usage.component.ts',
    content: require('!!raw-loader!./example/lazy-loading-limit-usage/lazy-loading-limit-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'lazy-loading-limit-usage.component.html',
    content: require('!!raw-loader!./example/lazy-loading-limit-usage/lazy-loading-limit-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'dropdown-lazy-loading-limit-usage.module.ts',
    content: require('!!raw-loader!./example/lazy-loading-limit-usage/lazy-loading-limit-usage.module.md')
  }
];
