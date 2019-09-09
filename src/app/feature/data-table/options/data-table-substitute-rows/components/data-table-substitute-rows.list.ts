import { ExampleFile, FileType } from 'helper-models';

export const substituteRowsUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'substitute-rows-usage.component.ts',
    content: require('!!raw-loader!./example/substitute-rows-usage/substitute-rows-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'substitute-rows-usage.component.html',
    content: require('!!raw-loader!./example/substitute-rows-usage/substitute-rows-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'substitute-rows-usage.module.ts',
    content: require('!!raw-loader!./example/substitute-rows-usage/substitute-rows-usage.module.md')
  }
];

export const withoutSubstituteRowsUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'substitute-rows-disabled-usage.component.ts',
    content: require('!!raw-loader!./example/substitute-rows-disabled-usage/substitute-rows-disabled-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'substitute-rows-disabled-usage.component.html',
    content: require('!!raw-loader!./example/substitute-rows-disabled-usage/substitute-rows-disabled-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'substitute-rows-disabled-usage.module.ts',
    content: require('!!raw-loader!./example/substitute-rows-disabled-usage/substitute-rows-disabled-usage.module.md')
  }
];

export const demoSnippet: any = {
  showSubstituteRowsEnabled: require('!!raw-loader!./docs/show-substitute-rows-enabled.md'),
  showSubstituteRowsDisabled: require('!!raw-loader!./docs/show-substitute-rows-disabled.md')
};
