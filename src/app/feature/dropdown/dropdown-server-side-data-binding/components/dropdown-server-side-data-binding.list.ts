import { ExampleFile, FileType } from '../../../../shared/models';

export const serverSideDataBindingUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'server-side-data-binding.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/server-side-data-binding/server-side-data-binding.module.md')
  },
  {
    type: FileType.TS,
    name: 'server-side-data-binding.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/server-side-data-binding/server-side-data-binding.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'server-side-data-binding.component.html',
    content: require('!!raw-loader?lang=html!./example/server-side-data-binding/server-side-data-binding.component.html')
  },
  // {
  //   type: FileType.TS,
  //   name: 'server-side-data-binding.data.ts',
  //   content: require('!!raw-loader?lang=typescript!./example/server-side-data-binding/server-side-data-binding.data.ts')
  // }
];

