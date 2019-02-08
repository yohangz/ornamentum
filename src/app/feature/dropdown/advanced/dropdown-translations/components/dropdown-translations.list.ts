import { ExampleFile, FileType } from 'helper-models';

export const translationsNoDataMessageUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'translations-no-data-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/translations-no-data-message-usage/translations-no-data-message-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'translations-no-data-message-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/translations-no-data-message-usage/translations-no-data-message-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'translations-no-data-message-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/translations-no-data-message-usage/translations-no-data-message-usage.component.html')
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
  }
];

export const translationsFilterPlaceholderUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'translations-filter-placeholder-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/translations-filter-placeholder-usage/translations-filter-placeholder-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'translations-filter-placeholder-usage.component.ts',
    content: require(
      '!!raw-loader?lang=typescript!./example/translations-filter-placeholder-usage/translations-filter-placeholder-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'translations-filter-placeholder-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/translations-filter-placeholder-usage/translations-filter-placeholder-usage.component.html')
  }
];

export const translationsSelectPlaceholderUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'translations-select-placeholder-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/translations-select-placeholder-usage/translations-select-placeholder-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'translations-select-placeholder-usage.component.ts',
    content: require(
      '!!raw-loader?lang=typescript!./example/translations-select-placeholder-usage/translations-select-placeholder-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'translations-select-placeholder-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/translations-select-placeholder-usage/translations-select-placeholder-usage.component.html')
  }
];

export const translationsSelectedItemWrapPlaceholderUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'translations-selected-item-wrap-placeholder-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/translations-selected-item-wrap-placeholder-usage/' +
      'translations-selected-item-wrap-placeholder-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'translations-selected-item-wrap-placeholder-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/translations-selected-item-wrap-placeholder-usage/' +
      'translations-selected-item-wrap-placeholder-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'translations-selected-item-wrap-placeholder-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/translations-selected-item-wrap-placeholder-usage/' +
      'translations-selected-item-wrap-placeholder-usage.component.html')
  }
];

export const demoSnippet: any = {
  translations: require('!!raw-loader?lang=typescript!./docs/translations.md')
};
