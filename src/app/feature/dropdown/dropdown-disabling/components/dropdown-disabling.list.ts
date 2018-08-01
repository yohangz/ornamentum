import { ExampleFile, FileType } from '../../../../shared/models';

export const disablingUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'disabling-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/disabling-usage/disabling-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'disabling-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/disabling-usage/disabling-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'disabling-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/disabling-usage/disabling-usage.component.html')
  },
  // {
  //   type: FileType.TS,
  //   name: 'disabling-usage.data.ts',
  //   content: require('!!raw-loader?lang=typescript!./example/disabling-usage/disabling-usage.data.ts')
  // }
];
