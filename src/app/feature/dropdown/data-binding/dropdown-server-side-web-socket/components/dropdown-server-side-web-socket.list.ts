import { ExampleFile, FileType } from 'helper-models';

export const serverSideWebSocketUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'server-side-web-socket-usage.component.ts',
    content: require('!!raw-loader!./example/server-side-web-socket-usage/server-side-web-socket-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'server-side-web-socket-usage.component.html',
    content: require('!!raw-loader!./example/server-side-web-socket-usage/server-side-web-socket-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'server-side-web-socket-usage.module.ts',
    content: require('!!raw-loader!./example/server-side-web-socket-usage/server-side-web-socket-usage.module.md')
  }
];

export const demoSnippet: any = {
  items: require('!!raw-loader!./docs/items.md'),
  dataSource: require('!!raw-loader!./docs/data-source.md')
};
