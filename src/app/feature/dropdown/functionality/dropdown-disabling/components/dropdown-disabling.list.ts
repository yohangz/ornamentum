import { ExampleFile, FileType } from 'helper-models';

export const disablingUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'disabling-usage.component.ts',
    content: require('!!raw-loader!./example/disabling-usage/disabling-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'disabling-usage.component.html',
    content: require('!!raw-loader!./example/disabling-usage/disabling-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'disabling-usage.module.ts',
    content: require('!!raw-loader!./example/disabling-usage/disabling-usage.module.md')
  }
];

export const demoSnippet: any = {
  dropdownDisabling: require('!!raw-loader!./docs/dropdown-disabling.md')
};
