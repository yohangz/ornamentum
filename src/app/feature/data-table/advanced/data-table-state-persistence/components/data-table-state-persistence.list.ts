import { ExampleFile, FileType } from 'helper-models';

export const statePersistenceUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'state-persistence-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/state-persistence-usage/state-persistence-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'state-persistence-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/state-persistence-usage/state-persistence-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'state-persistence-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/state-persistence-usage/state-persistence-usage.module.md')
  }
];

export const storageModeUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'storage-mode-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/storage-mode-usage/storage-mode-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'storage-mode-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/storage-mode-usage/storage-mode-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'storage-mode-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/storage-mode-usage/storage-mode-usage.module.md')
  }
];

export const demoSnippet: any = {
  persistTableState: require('!!raw-loader?lang=typescript!./docs/persist-table-state.md')
};
