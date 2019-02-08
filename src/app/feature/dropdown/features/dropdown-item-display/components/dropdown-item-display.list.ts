import { ExampleFile, FileType } from 'helper-models';

export const itemDisplayUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'item-display-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/item-display-usage/item-display-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'item-display-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/item-display-usage/item-display-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'item-display-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/item-display-usage/item-display-usage.component.html')
  }
];

export const demoSnippet: any = {
  displayTrackBy: require('!!raw-loader?lang=typescript!./docs/display-track-by.md')
};
