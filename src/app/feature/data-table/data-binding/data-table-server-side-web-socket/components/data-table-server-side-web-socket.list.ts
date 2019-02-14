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
  onDataBind: require('!!raw-loader!./docs/on-data-bind-method.md'),
  isBrowser: require('!!raw-loader!./docs/is-browser-method.md'),
  init: require('!!raw-loader!./docs/init.md'),
  onDataBindMethod: require('!!raw-loader!./docs/on-data-bind-method.md'),
  socketStream: require('!!raw-loader!./docs/socket-stream.md'),
  dispose: require('!!raw-loader!./docs/dispose-method.md')
};
