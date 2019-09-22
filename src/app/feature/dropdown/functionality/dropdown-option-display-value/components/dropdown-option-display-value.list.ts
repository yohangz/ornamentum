import { ExampleFile, FileType } from 'helper-models';

export const optionDisplayUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'option-display-value-usage.component.ts',
    content: require('!!raw-loader!./example/option-display-value-usage/option-display-value-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'option-display-value-usage.component.html',
    content: require('!!raw-loader!./example/option-display-value-usage/option-display-value-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'option-display-value-usage.module.ts',
    content: require('!!raw-loader!./example/option-display-value-usage/option-display-value-usage.module.md')
  }
];

export const demoSnippet: any = {
  displayTrackBy: require('!!raw-loader!./docs/display-track-by.md')
};
