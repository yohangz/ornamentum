import { ExampleFile, FileType } from 'helper-models';

export const menuPositionUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'menu-position-usage.component.ts',
    content: require('!!raw-loader!./example/menu-position-usage/menu-position-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'menu-position-usage.component.html',
    content: require('!!raw-loader!./example/menu-position-usage/menu-position-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'menu-position-usage.module.ts',
    content: require('!!raw-loader!./example/menu-position-usage/menu-position-usage.module.md')
  }
];

export const demoSnippet: any = {
  menuPosition: require('!!raw-loader!./docs/menu-position.md')
};
