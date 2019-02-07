import { ExampleFile, FileType } from 'helper-models';

export const clientSideStreamUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'client-side-stream-usage.module.ts',
    content: require(
      '!!raw-loader?lang=typescript!./example/client-side-stream-usage/client-side-stream-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'client-side-stream-usage.component.ts',
    content: require(
      '!!raw-loader?lang=typescript!./example/client-side-stream-usage/client-side-stream-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'client-side-stream-usage.component.html',
    content: require(
      '!!raw-loader?lang=html!./example/client-side-stream-usage/client-side-stream-usage.component.html')
  }
];

export const demoSnippet: any = {
  items: require('!!raw-loader?lang=typescript!./docs/items.md'),
  dataSource: require('!!raw-loader?lang=typescript!./docs/data-source.md'),
  dataBindingWithItems: require('!!raw-loader?lang=typescript!./docs/real-time-binding-with-items-code-snippet.md')
};
