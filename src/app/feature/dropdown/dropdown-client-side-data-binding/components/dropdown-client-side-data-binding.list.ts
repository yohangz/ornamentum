import { ExampleFile, FileType } from '../../../../shared/models/index';

export const clientSideDataBindingUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'client-side-data-binding.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/client-side-data-binding/client-side-data-binding.module.md')
  },
  {
    type: FileType.TS,
    name: 'client-side-data-binding.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/client-side-data-binding/client-side-data-binding.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'client-side-data-binding.component.html',
    content: require('!!raw-loader?lang=html!./example/client-side-data-binding/client-side-data-binding.component.html')
  },
  {
    type: FileType.TS,
    name: 'client-side-data-binding.data.ts',
    content: require('!!raw-loader?lang=typescript!./example/client-side-data-binding/client-side-data-binding.data.ts')
  }
];

