import { ExampleFile, FileType } from '../../../../shared/models';

export const clientSideDataBindingWithItemsUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'client-side-data-binding-with-items.module.ts',
    content:
      require('!!raw-loader?lang=typescript!./example/client-side-data-binding-with-items/client-side-data-binding-with-items.module.md')
  },
  {
    type: FileType.TS,
    name: 'client-side-data-binding-with-items.component.ts',
    content:
      require('!!raw-loader?lang=typescript!./example/client-side-data-binding-with-items/client-side-data-binding-with-items.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'client-side-data-binding-with-items.component.html',
    content:
      require('!!raw-loader?lang=html!./example/client-side-data-binding-with-items/client-side-data-binding-with-items.component.html')
  },
  {
    type: FileType.TS,
    name: 'sample-data.ts',
    content:
      require('!!raw-loader?lang=typescript!../../../../shared/data/sample-data.ts')
  }
];

export const clientSideDataBindingWithDataSourceUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'client-side-data-binding-with-data-source.module.ts',
    content:
      require('!!raw-loader?lang=typescript!./example/client-side-data-binding-with-data-source/client-side-data-binding-with-data-source.module.md')
  },
  {
    type: FileType.TS,
    name: 'client-side-data-binding-with-data-source.component.ts',
    content:
      require('!!raw-loader?lang=typescript!./example/client-side-data-binding-with-data-source/client-side-data-binding-with-data-source.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'client-side-data-binding-with-data-source.component.html',
    content:
      require('!!raw-loader?lang=html!./example/client-side-data-binding-with-data-source/client-side-data-binding-with-data-source.component.html')
  },
  {
    type: FileType.TS,
    name: 'sample-data.ts',
    content: require('!!raw-loader?lang=typescript!../../../../shared/data/sample-data.ts')
  }
];

export const demoSnippet: any = {
  items: require('!!raw-loader?lang=typescript!./docs/items.md'),
  dataSource: require('!!raw-loader?lang=typescript!./docs/data-source.md'),
  dataFetchMethod: require('!!raw-loader?lang=typescript!./docs/data-fetch-method.md')
};

