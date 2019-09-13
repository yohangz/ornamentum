import { ExampleFile, FileType } from 'helper-models';

export const itemDisplayUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'item-display-usage.component.ts',
    content: require('!!raw-loader!./example/item-display-usage/item-display-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'item-display-usage.component.html',
    content: require('!!raw-loader!./example/item-display-usage/item-display-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'item-display-usage.module.ts',
    content: require('!!raw-loader!./example/item-display-usage/item-display-usage.module.md')
  }
];

export const demoSnippet: any = {
  displayTrackBy: require('!!raw-loader!./docs/display-track-by.md')
};
