import { ExampleFile, FileType } from '../../../../shared/models';

export const eventsUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'events-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/events-usage/events-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'events-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/events-usage/events-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'events-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/events-usage/events-usage.component.html')
  },
  // {
  //   type: FileType.JSON,
  //   name: 'sample-data.json',
  //   content: require('!!raw-loader?lang=json!../../../../shared/data/sample-data.json')
  // }
];

