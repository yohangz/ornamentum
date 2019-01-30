import { ExampleFile, FileType } from '../../../../shared/models';

export const clientSideRealTimeDataBindingUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'client-side-real-time-data-binding.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/client-side-real-time-data-binding/client-side-real-time-data-binding.module.md')
  },
  {
    type: FileType.TS,
    name: 'client-side-real-time-data-binding.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/client-side-real-time-data-binding/client-side-real-time-data-binding.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'client-side-real-time-data-binding.component.html',
    content: require('!!raw-loader?lang=html!./example/client-side-real-time-data-binding/client-side-real-time-data-binding.component.html')
  }
];

export const demoSnippet: any = {
  items: require('!!raw-loader?lang=typescript!./docs/items.md'),
  dataSource: require('!!raw-loader?lang=typescript!./docs/data-source.md'),
  dataBindingWithItems: require('!!raw-loader?lang=typescript!./docs/data-binding-with-items.md')
};
