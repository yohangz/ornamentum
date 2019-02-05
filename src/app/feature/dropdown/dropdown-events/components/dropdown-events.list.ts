import { ExampleFile, FileType } from 'helper-models';

export const eventsUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'events-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/events-usage/events-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'events-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/events-usage/events-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'events-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/events-usage/events-usage.component.html')
  }
];

export const dataBoundUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'events-data-bound-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/data-bound-usage/data-bound-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'data-bound-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/data-bound-usage/data-bound-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'data-bound-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/data-bound-usage/data-bound-usage.component.html')
  }
];

export const initUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'init-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/init-usage/init-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'init-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/init-usage/init-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'init-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/init-usage/init-usage.component.html')
  }
];

export const selectChangeUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'select-change-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/select-change-usage/select-change-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'select-change-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/select-change-usage/select-change-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'select-change-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/select-change-usage/select-change-usage.component.html')
  }
];

export const triggerSelectChangeOnFirstOptionSelectUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'trigger-select-change-on-first-option-select-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/trigger-select-change-on-first-option-select-usage/' +
      'trigger-select-change-on-first-option-select-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'trigger-select-change-on-first-option-select-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/trigger-select-change-on-first-option-select-usage/' +
      'trigger-select-change-on-first-option-select-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'trigger-select-change-on-first-option-select-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/trigger-select-change-on-first-option-select-usage/' +
      'trigger-select-change-on-first-option-select-usage.component.html')
  }
];

export const triggerSelectChangeOnInitUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'trigger-select-change-on-init-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/trigger-select-change-on-init-usage/trigger-select-change-on-init-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'trigger-select-change-on-init-usage.component.ts',
    content: require(
      '!!raw-loader?lang=typescript!./example/trigger-select-change-on-init-usage/trigger-select-change-on-init-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'trigger-select-change-on-init-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/trigger-select-change-on-init-usage/trigger-select-change-on-init-usage.component.html')
  }
];

export const triggerSelectChangeOnModelUpdateUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'trigger-select-change-on-model-update-usage.module.ts',
    content: require(
      '!!raw-loader?lang=typescript!./example/trigger-select-change-on-model-update-usage/' +
      'trigger-select-change-on-model-update-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'trigger-select-change-on-model-update-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/trigger-select-change-on-model-update-usage' +
      '/trigger-select-change-on-model-update-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'trigger-select-change-on-model-update-usage.component.html',
    content: require(
      '!!raw-loader?lang=html!./example/trigger-select-change-on-model-update-usage/trigger-select-change-on-model-update-usage.component.html')
  }
];
