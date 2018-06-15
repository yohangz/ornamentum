import { ExampleFile, FileType } from '../../../../shared/models';

export const translationsNoDataUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'translations-no-data-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/translations-no-data-usage/translations-no-data-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'translations-no-data-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/translations-no-data-usage/translations-no-data-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'translations-no-data-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/translations-no-data-usage/translations-no-data-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'translations-no-data-usage.data.ts',
    content: require('!!raw-loader?lang=typescript!./example/translations-no-data-usage/translations-no-data-usage.data.ts')
  }
];

export const additionalTranslationsUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'additional-translations-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/additional-translations-usage/additional-translations-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'additional-translations-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/additional-translations-usage/additional-translations-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'additional-translations-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/additional-translations-usage/additional-translations-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'additional-translations-usage.data.ts',
    content: require('!!raw-loader?lang=typescript!./example/additional-translations-usage/additional-translations-usage.data.ts')
  }
];
