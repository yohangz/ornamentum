import { ExampleFile, FileType } from '../../../../shared/models';

export const menuPositionUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'menu-position-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/menu-position-usage/menu-position-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'menu-position-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/menu-position-usage/menu-position-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'menu-position-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/menu-position-usage/menu-position-usage.component.html')
  },
  // {
  //   type: FileType.TS,
  //   name: 'menu-position-usage.data.ts',
  //   content: require('!!raw-loader?lang=typescript!./example/menu-position-usage/menu-position-usage.data.ts')
  // }
];
