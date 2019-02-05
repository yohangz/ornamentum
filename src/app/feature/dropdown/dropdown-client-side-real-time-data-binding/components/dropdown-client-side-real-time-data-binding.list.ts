import { ExampleFile, FileType } from 'helper-models';

export const clientSideRealTimeDataBindingUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'client-side-real-time-data-binding-usage.module.ts',
    content: require(
      '!!raw-loader?lang=typescript!./example/client-side-real-time-data-binding-usage/client-side-real-time-data-binding-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'client-side-real-time-data-binding-usage.component.ts',
    content: require(
      '!!raw-loader?lang=typescript!./example/client-side-real-time-data-binding-usage/client-side-real-time-data-binding-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'client-side-real-time-data-binding-usage.component.html',
    content: require(
      '!!raw-loader?lang=html!./example/client-side-real-time-data-binding-usage/client-side-real-time-data-binding-usage.component.html')
  }
];

export const demoSnippet: any = {
  items: require('!!raw-loader?lang=typescript!./docs/items.md'),
  dataSource: require('!!raw-loader?lang=typescript!./docs/data-source.md'),
  dataBindingWithItems: require('!!raw-loader?lang=typescript!./docs/real-time-binding-with-items-code-snippet.md')
};
