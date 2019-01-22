import { ExampleFile, FileType } from '../../../../shared/models';

export const displayItemsUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'display-items-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/display-items-usage/display-items-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'display-items-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/display-items-usage/display-items-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'display-items-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/display-items-usage/display-items-usage.component.html')
  }
];

export const demoSnippet: any = {
  displayTrackBy: require('!!raw-loader?lang=typescript!./docs/display-track-by.md')
};
