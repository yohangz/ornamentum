import { ExampleFile, FileType } from '../../../../shared/models';

export const menuWidthHeightUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'menu-width-height-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/menu-width-height-usage/menu-width-height-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'menu-width-height-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/menu-width-height-usage/menu-width-height-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'menu-width-height-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/menu-width-height-usage/menu-width-height-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'menu-width-height-usage.data.ts',
    content: require('!!raw-loader?lang=typescript!./example/menu-width-height-usage/menu-width-height-usage.data.ts')
  }
];
