import { ExampleFile, FileType } from 'helper-models';

export const serverSideWebSocketUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'server-side-web-socket-usage.component.ts',
    content: require(
      '!!raw-loader?lang=typescript!./example/server-side-web-socket-usage/server-side-web-socket-usage.component.md')
  },
  {
    type: FileType.HTML,
    name: 'server-side-web-socket-usage.component.html',
    content: require(
      '!!raw-loader?lang=html!./example/server-side-web-socket-usage/server-side-web-socket-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'server-side-web-socket-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/server-side-web-socket-usage/server-side-web-socket-usage.module.md')
  }
];

export const demoSnippet: any = {
  items: require('!!raw-loader?lang=typescript!./docs/items.md'),
  dataSource: require('!!raw-loader?lang=typescript!./docs/data-source.md')
};
