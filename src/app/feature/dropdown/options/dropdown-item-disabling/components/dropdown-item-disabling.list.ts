import { ExampleFile, FileType } from 'helper-models';

export const itemDisablingUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'item-disabling-usage.component.ts',
    content: require('!!raw-loader!./example/item-disabling-usage/item-disabling-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'item-disabling-usage.component.html',
    content: require('!!raw-loader!./example/item-disabling-usage/item-disabling-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'item-disabling-usage.module.ts',
    content: require('!!raw-loader!./example/item-disabling-usage/item-disabling-usage.module.md')
  }
];

export const demoSnippet: any = {
  disabledTrackBy: require('!!raw-loader!./docs/disabled-track-by.md')
};
