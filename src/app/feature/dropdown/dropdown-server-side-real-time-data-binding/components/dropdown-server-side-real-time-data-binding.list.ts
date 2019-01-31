import { ExampleFile, FileType } from '../../../../shared/models';

export const clientSideRealTimeDataBindingUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'server-side-real-time-data-binding.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/server-side-real-time-data-binding/server-side-real-time-data-binding.module.md')
  },
  {
    type: FileType.TS,
    name: 'server-side-real-time-data-binding.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/server-side-real-time-data-binding/server-side-real-time-data-binding.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'server-side-real-time-data-binding.component.html',
    content: require('!!raw-loader?lang=html!./example/server-side-real-time-data-binding/server-side-real-time-data-binding.component.html')
  }
];

export const demoSnippet: any = {
  items: require('!!raw-loader?lang=typescript!./docs/items.md'),
  dataSource: require('!!raw-loader?lang=typescript!./docs/data-source.md')
};
