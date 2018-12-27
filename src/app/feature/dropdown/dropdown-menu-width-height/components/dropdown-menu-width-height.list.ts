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
    name: 'sample-data.ts',
    content: require('!!raw-loader?lang=typescript!../../../../shared/data/sample-data.ts')
  }
];

export const menuHeightUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'menu-height-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/menu-height-usage/menu-height-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'menu-height-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/menu-height-usage/menu-height-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'menu-height-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/menu-height-usage/menu-height-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'sample-data.ts',
    content: require('!!raw-loader?lang=typescript!../../../../shared/data/sample-data.ts')
  }
];

export const menuWidthUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'menu-width-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/menu-width-usage/menu-width-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'menu-width-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/menu-width-usage/menu-width-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'menu-width-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/menu-width-usage/menu-width-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'sample-data.ts',
    content: require('!!raw-loader?lang=typescript!../../../../shared/data/sample-data.ts')
  }
];

export const demoSnippet: any = {
  menuResize: require('!!raw-loader?lang=typescript!./docs/menu-resize.md')
};
