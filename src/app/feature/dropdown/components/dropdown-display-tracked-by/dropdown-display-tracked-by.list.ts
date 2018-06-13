import { ExampleFile, FileType } from '../../../../shared/models';

export const displayTrackedByUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'display-tracked-by-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/display-tracked-by-usage/display-tracked-by-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'display-tracked-by-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/display-tracked-by-usage/display-tracked-by-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'display-tracked-by-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/display-tracked-by-usage/display-tracked-by-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'display-tracked-by-usage.data.ts',
    content: require('!!raw-loader?lang=typescript!./example/display-tracked-by-usage/display-tracked-by-usage.data.ts')
  }
];
