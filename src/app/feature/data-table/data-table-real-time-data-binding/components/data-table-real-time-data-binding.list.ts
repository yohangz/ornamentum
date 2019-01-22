import { ExampleFile, FileType } from '../../../../shared/models';

export const realTimeDataBindingUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'real-time-data-binding.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/real-time-data-binding/real-time-data-binding.module.md')
  },
  {
    type: FileType.TS,
    name: 'real-time-data-binding.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/real-time-data-binding/real-time-data-binding.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'real-time-data-binding.component.html',
    content: require('!!raw-loader?lang=html!./example/real-time-data-binding/real-time-data-binding.component.html')
  }
];

export const demoSnippet: any = {
  dataSource: require('!!raw-loader?lang=typescript!./docs/data-source.md'),
  dataFetchMethod: require('!!raw-loader?lang=typescript!./docs/data-fetch-method.md')
};
