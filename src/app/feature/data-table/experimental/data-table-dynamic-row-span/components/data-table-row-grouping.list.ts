import { ExampleFile, FileType } from 'helper-models';

export const dynamicRowSpanUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'dynamic-row-span-usage.component.ts',
    content: require('!!raw-loader!./example/dynamic-row-span-usage/dynamic-row-span-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'dynamic-row-span-usage.component.html',
    content: require('!!raw-loader!./example/dynamic-row-span-usage/dynamic-row-span-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'dynamic-row-span-usage.module.ts',
    content: require('!!raw-loader!./example/dynamic-row-span-usage/dynamic-row-span-usage.module.md')
  }
];

export const demoSnippet: any = {
  onDynamicRowSpanExtract: require('!!raw-loader!./docs/on-dynamic-row-span-extract.md')
};
