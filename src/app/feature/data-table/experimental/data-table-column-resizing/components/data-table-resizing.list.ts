import { ExampleFile, FileType } from 'helper-models';

export const columnResizingUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'column-resizing-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/column-resizing-usage/column-resizing-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'column-resizing-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/column-resizing-usage/column-resizing-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'column-resizing-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/column-resizing-usage/column-resizing-usage.component.html')
  }
];

export const demoSnippet: any = {
  resizable: require('!!raw-loader?lang=typescript!./docs/resizable.md')
};
