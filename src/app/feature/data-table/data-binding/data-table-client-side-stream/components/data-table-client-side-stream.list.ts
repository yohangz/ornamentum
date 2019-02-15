import { ExampleFile, FileType } from 'helper-models';

export const clientSideStreamUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'client-side-stream-usage.component.ts',
    content: require(
      '!!raw-loader!./example/client-side-stream-usage/client-side-stream-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'client-side-stream-usage.component.html',
    content: require('!!raw-loader!./example/client-side-stream-usage/client-side-stream-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'client-side-stream-usage.module.ts',
    content: require('!!raw-loader!./example/client-side-stream-usage/client-side-stream-usage.module.md')
  }
];

export const demoSnippet: any = {
  items: require('!!raw-loader!./docs/items.md'),
  dataSource: require('!!raw-loader!./docs/data-source.md'),
  dataBindingWithItems: require('!!raw-loader!./docs/client-side-stream-with-items.md')
};
