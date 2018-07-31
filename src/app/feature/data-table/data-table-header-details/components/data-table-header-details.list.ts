import { ExampleFile, FileType } from '../../../../shared/models';

export const tableHeaderDetailsUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'table-header-details-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/table-header-details-usage/table-header-details-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'table-header-details-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/table-header-details-usage/table-header-details-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'table-header-details-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/table-header-details-usage/table-header-details-usage.component.html')
  },
  // {
  //   type: FileType.JSON,
  //   name: 'sample-data.json',
  //   content: require('!!raw-loader?lang=json!../../../../shared/data/sample-data.json')
  // }
];

