import { ExampleFile, FileType } from '../../../../shared/models';

export const loadOnInitUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'load-on-init-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/load-on-init-usage/load-on-init-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'load-on-init-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/load-on-init-usage/load-on-init-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'load-on-init-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/load-on-init-usage/load-on-init-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'sample-data.ts',
    content: require('!!raw-loader?lang=typescript!../../../../shared/data/sample-data.ts')
  }
];

export const demoSnippet: any = {
  loadDataOnInit: require('!!raw-loader?lang=typescript!./docs/load-data-on-init.md')
};
