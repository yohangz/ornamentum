import { ExampleFile, FileType } from '../../../../shared/models';

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
  },
  {
    type: FileType.TS,
    name: 'sample-data.ts',
    content: require('!!raw-loader?lang=typescript!../../../../shared/data/sample-data.ts')
  }
];

export const eventsDataBoundUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'events-data-bound-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/events-data-bound-usage/events-data-bound-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'events-data-bound-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/events-data-bound-usage/events-data-bound-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'events-data-bound-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/events-data-bound-usage/events-data-bound-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'sample-data.ts',
    content: require('!!raw-loader?lang=typescript!../../../../shared/data/sample-data.ts')
  }
];

export const eventsInitUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'events-init-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/events-init-usage/events-init-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'events-init-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/events-init-usage/events-init-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'events-init-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/events-init-usage/events-init-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'sample-data.ts',
    content: require('!!raw-loader?lang=typescript!../../../../shared/data/sample-data.ts')
  }
];

export const eventsSelectChangeUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'events-select-change-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/events-select-change-usage/events-select-change-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'events-select-change-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/events-select-change-usage/events-select-change-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'events-select-change-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/events-select-change-usage/events-select-change-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'sample-data.ts',
    content: require('!!raw-loader?lang=typescript!../../../../shared/data/sample-data.ts')
  }
];

export const eventsTriggerSelectChangeOnFirstOptionSelectUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'events-trigger-select-change-on-first-option-select-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/events-trigger-select-change-on-first-option-select-usage/' +
      'events-trigger-select-change-on-first-option-select-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'events-trigger-select-change-on-first-option-select-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/events-trigger-select-change-on-first-option-select-usage/' +
      'events-trigger-select-change-on-first-option-select-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'events-trigger-select-change-on-first-option-select-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/events-trigger-select-change-on-first-option-select-usage/' +
      'events-trigger-select-change-on-first-option-select-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'sample-data.ts',
    content: require('!!raw-loader?lang=typescript!../../../../shared/data/sample-data.ts')
  }
];

export const eventsTriggerSelectChangeOnInitUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'events-trigger-select-change-on-init-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/events-trigger-select-change-on-init-usage/' +
      'events-trigger-select-change-on-init-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'events-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/events-trigger-select-change-on-init-usage/' +
      'events-trigger-select-change-on-init-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'events-trigger-select-change-on-init-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/events-trigger-select-change-on-init-usage/' +
      'events-trigger-select-change-on-init-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'sample-data.ts',
    content: require('!!raw-loader?lang=typescript!../../../../shared/data/sample-data.ts')
  }
];

export const eventsTriggerSelectChangeOnModelUpdateUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'events-trigger-select-change-on-model-update-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/events-trigger-select-change-on-model-update-usage/' +
      'events-trigger-select-change-on-model-update-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'events-trigger-select-change-on-model-update-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/events-trigger-select-change-on-model-update-usage' +
      '/events-trigger-select-change-on-model-update-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'events-trigger-select-change-on-model-update-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/events-trigger-select-change-on-model-update-usage/' +
      'events-trigger-select-change-on-model-update-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'sample-data.ts',
    content: require('!!raw-loader?lang=typescript!../../../../shared/data/sample-data.ts')
  }
];
