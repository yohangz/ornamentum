import { ExampleFile, FileType } from '../../../../shared/models';

export const withSubstituteRowsUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'with-substitute-rows-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/with-substitute-rows-usage/with-substitute-rows-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'with-substitute-rows-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/with-substitute-rows-usage/with-substitute-rows-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'with-substitute-rows-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/with-substitute-rows-usage/with-substitute-rows-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'sample-data.ts',
    content: require('!!raw-loader?lang=typescript!../../../../shared/data/sample-data.ts')
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
  },
  {
    type: FileType.TS,
    name: 'sample-data.ts',
    content: require('!!raw-loader?lang=typescript!../../../../shared/data/sample-data.ts')
  }
];

