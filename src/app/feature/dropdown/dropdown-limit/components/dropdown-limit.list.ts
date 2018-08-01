import { ExampleFile, FileType } from '../../../../shared/models';

export const dataLimitUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'data-limit-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/data-limit-usage/data-limit-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'data-limit-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/data-limit-usage/data-limit-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'data-limit-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/data-limit-usage/data-limit-usage.component.html')
  },
  // {
  //   type: FileType.TS,
  //   name: 'data-limit-usage.data.ts',
  //   content: require('!!raw-loader?lang=typescript!./example/data-limit-usage/data-limit-usage.data.ts')
  // }
];
