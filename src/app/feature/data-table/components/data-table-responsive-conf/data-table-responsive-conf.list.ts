import { ExampleFile, FileType } from '../../../../shared/models';

export const responsiveConfAllUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'responsive-conf-all-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/responsive-conf-all-usage/responsive-conf-all-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'responsive-conf-all-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/responsive-conf-all-usage/responsive-conf-all-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'responsive-conf-all-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/responsive-conf-all-usage/responsive-conf-all-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'responsive-conf-all-usage.data.ts',
    content: require('!!raw-loader?lang=typescript!./example/responsive-conf-all-usage/responsive-conf-all-usage.data.ts')
  }
];

export const responsiveConfWithoutWidthHeightUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'responsive-conf-without-width-height-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/responsive-conf-without-width-height-usage/' +
      'responsive-conf-without-width-height-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'responsive-conf-without-width-height-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/responsive-conf-without-width-height-usage/' +
      'responsive-conf-without-width-height-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'responsive-conf-without-width-height-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/responsive-conf-without-width-height-usage/' +
      'responsive-conf-without-width-height-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'responsive-conf-without-width-height-usage.data.ts',
    content: require('!!raw-loader?lang=typescript!./example/responsive-conf-without-width-height-usage/' +
      'responsive-conf-without-width-height-usage.data.ts')
  }
];
