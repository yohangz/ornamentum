import { ExampleFile, FileType } from 'helper-models';

export const loadDataOnInitUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'load-data-on-init-usage.component.ts',
    content: require('!!raw-loader!./example/load-data-on-init-usage/load-data-on-init-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'load-data-on-init-usage.component.html',
    content: require('!!raw-loader!./example/load-data-on-init-usage/load-data-on-init-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'load-data-on-init-usage.module.ts',
    content: require('!!raw-loader!./example/load-data-on-init-usage/load-data-on-init-usage.module.md')
  }
];

export const demoSnippet: any = {
  loadDataOnInit: require('!!raw-loader!./docs/load-data-on-init.md')
};
