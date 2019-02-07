import { ExampleFile, FileType } from 'helper-models';

export const substituteRowsUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'with-substitute-rows-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/substitute-rows-usage/substitute-rows-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'with-substitute-rows-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/substitute-rows-usage/substitute-rows-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'with-substitute-rows-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/substitute-rows-usage/substitute-rows-usage.component.html')
  }
];

export const withoutSubstituteRowsUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'without-substitute-rows-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/without-substitute-rows-usage/without-substitute-rows-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'without-substitute-rows-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/without-substitute-rows-usage/without-substitute-rows-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'without-substitute-rows-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/without-substitute-rows-usage/without-substitute-rows-usage.component.html')
  }
];

export const demoSnippet: any = {
  showSubstituteRows: require('!!raw-loader?lang=typescript!./docs/show-substitute-rows.md')
};
