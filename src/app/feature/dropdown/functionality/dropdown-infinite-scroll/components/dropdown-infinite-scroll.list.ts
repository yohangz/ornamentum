import { ExampleFile, FileType } from 'helper-models';

export const dataLimitUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'infinite-scroll-usage.component.ts',
    content: require('!!raw-loader!./example/infinite-scroll-usage/infinite-scroll-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'infinite-scroll-usage.component.html',
    content: require('!!raw-loader!./example/infinite-scroll-usage/infinite-scroll-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'dropdown-infinite-scroll-usage.module.ts',
    content: require('!!raw-loader!./example/infinite-scroll-usage/infinite-scroll-usage.module.md')
  }
];

export const pageUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'infinite-scroll-limit-usage.component.ts',
    content: require('!!raw-loader!./example/infinite-scroll-limit-usage/infinite-scroll-limit-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'infinite-scroll-limit-usage.component.html',
    content: require('!!raw-loader!./example/infinite-scroll-limit-usage/infinite-scroll-limit-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'dropdown-infinite-scroll-limit-usage.module.ts',
    content: require('!!raw-loader!./example/infinite-scroll-limit-usage/infinite-scroll-limit-usage.module.md')
  }
];

export const loadViewDistance: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'infinite-scroll-load-view-distance-usage.component.ts',
    content: require('!!raw-loader!./example/infinite-scroll-load-view-distance-usage/infinite-scroll-load-view-distance-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'infinite-scroll-load-view-distance-usage.component.html',
    content: require('!!raw-loader!./example/infinite-scroll-load-view-distance-usage/infinite-scroll-load-view-distance-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'infinite-scroll-load-view-distance-usage.module.ts',
    content: require('!!raw-loader!./example/infinite-scroll-load-view-distance-usage/infinite-scroll-load-view-distance-usage.module.md')
  }
];

export const demoSnippet: any = {
  limit: require('!!raw-loader!./docs/limit.md')
};
