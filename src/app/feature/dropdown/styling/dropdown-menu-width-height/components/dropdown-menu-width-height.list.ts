import { ExampleFile, FileType } from 'helper-models';

export const menuWidthHeightUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'menu-width-height-usage.component.ts',
    content: require('!!raw-loader!./example/menu-width-height-usage/menu-width-height-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'menu-width-height-usage.component.html',
    content: require('!!raw-loader!./example/menu-width-height-usage/menu-width-height-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'menu-width-height-usage.module.ts',
    content: require('!!raw-loader!./example/menu-width-height-usage/menu-width-height-usage.module.md')
  }
];

export const menuHeightUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'menu-height-usage.component.ts',
    content: require('!!raw-loader!./example/menu-height-usage/menu-height-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'menu-height-usage.component.html',
    content: require('!!raw-loader!./example/menu-height-usage/menu-height-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'menu-height-usage.module.ts',
    content: require('!!raw-loader!./example/menu-height-usage/menu-height-usage.module.md')
  }
];

export const menuWidthUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'menu-width-usage.component.ts',
    content: require('!!raw-loader!./example/menu-width-usage/menu-width-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'menu-width-usage.component.html',
    content: require('!!raw-loader!./example/menu-width-usage/menu-width-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'menu-width-usage.module.ts',
    content: require('!!raw-loader!./example/menu-width-usage/menu-width-usage.module.md')
  }
];

export const demoSnippet: any = {
  menuResize: require('!!raw-loader!./docs/menu-resize.md')
};
