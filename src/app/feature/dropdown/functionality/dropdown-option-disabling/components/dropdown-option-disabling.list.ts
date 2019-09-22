import { ExampleFile, FileType } from 'helper-models';

export const optionDisablingUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'option-disabling-usage.component.ts',
    content: require('!!raw-loader!./example/option-disabling-usage/option-disabling-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'option-disabling-usage.component.html',
    content: require('!!raw-loader!./example/option-disabling-usage/option-disabling-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'option-disabling-usage.module.ts',
    content: require('!!raw-loader!./example/option-disabling-usage/option-disabling-usage.module.md')
  }
];

export const demoSnippet: any = {
  disabledTrackBy: require('!!raw-loader!./docs/disabled-track-by.md')
};
