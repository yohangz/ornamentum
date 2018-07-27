// components
import {
  TabComponent,
  TabSetComponent,
  ExampleCodeComponent,
  CopyContentComponent,
} from './components';

// directives
import { ClipboardDirective } from './directives';

// services
import { TableDataFetchService } from './services';

/**
 * Export all shared components.
 */
export const COMPONENTS = [
  TabComponent,
  TabSetComponent,
  ExampleCodeComponent,
  CopyContentComponent,
  ClipboardDirective
];

/**
 * Export all shared services.
 */
export const SERVICES = [
  TableDataFetchService
];
