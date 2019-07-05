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
  basicUsage: require('!!raw-loader!./docs/basic-usage.md'),
  isBrowser: require('!!raw-loader!./docs/is-browser.md'),
  initMethod: require('!!raw-loader!./docs/init.md'),
  socketStream: require('!!raw-loader!./docs/socket-stream.md'),
  dispose: require('!!raw-loader!./docs/dispose.md')
};
