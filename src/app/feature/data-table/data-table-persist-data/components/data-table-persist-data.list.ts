import { ExampleFile, FileType } from '../../../../shared/models';

export const dataPersistenceUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'data-persistence-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/data-persistence-usage/data-persistence-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'data-persistence-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/data-persistence-usage/data-persistence-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'data-persistence-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/data-persistence-usage/data-persistence-usage.component.html')
  },
  // {
  //   type: FileType.JSON,
  //   name: 'sample-data.json',
  //   content: require('!!raw-loader?lang=json!../../../../shared/data/sample-data.json')
  // }
];

