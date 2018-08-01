import { ExampleFile, FileType } from '../../../../shared/models';

export const itemDisablingUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'item-disabling-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/item-disabling-usage/item-disabling-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'item-disabling-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/item-disabling-usage/item-disabling-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'item-disabling-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/item-disabling-usage/item-disabling-usage.component.html')
  },
  // {
  //   type: FileType.TS,
  //   name: 'item-disabling-usage.data.ts',
  //   content: require('!!raw-loader?lang=typescript!./example/item-disabling-usage/item-disabling-usage.data.ts')
  // }
];
