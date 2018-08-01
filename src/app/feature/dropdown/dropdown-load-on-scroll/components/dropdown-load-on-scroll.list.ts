import { ExampleFile, FileType } from '../../../../shared/models';

export const loadOnScrollUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'load-on-scroll-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/load-on-scroll-usage/load-on-scroll-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'load-on-scroll-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/load-on-scroll-usage/load-on-scroll-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'load-on-scroll-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/load-on-scroll-usage/load-on-scroll-usage.component.html')
  },
  // {
  //   type: FileType.TS,
  //   name: 'load-on-scroll-usage.data.ts',
  //   content: require('!!raw-loader?lang=typescript!./example/load-on-scroll-usage/load-on-scroll-usage.data.ts')
  // }
];
