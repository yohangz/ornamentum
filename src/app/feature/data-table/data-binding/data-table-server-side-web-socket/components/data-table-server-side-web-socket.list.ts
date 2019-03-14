import { ExampleFile, FileType } from 'helper-models';

export const serverSideWebSocketUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'server-side-web-socket-usage.component.ts',
    content: require('!!raw-loader!./example/server-side-web-socket-usage/server-side-web-socket-usage.component.md')
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
  webSocketDataBindingModule: require('!!raw-loader!./docs/ws-data-binding-module.md'),
  webSocketDataBindingComponent: require('!!raw-loader!./docs/ws-data-binding-component.md'),
  WebSocketDataBindingMarkup: require('!!raw-loader!./docs/ws-data-binding-markup.md'),
};
