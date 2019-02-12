// components
import { TabComponent, TabSetComponent, ExampleCodeComponent, CopyContentComponent, CodeSnippetComponent } from './components';

// directives
import { ClipboardDirective } from './directives';

// services
import { DataFetchService } from './services';

/**
 * Export all shared components.
 */
export const COMPONENTS = [TabComponent, TabSetComponent, ExampleCodeComponent, CopyContentComponent, CodeSnippetComponent];

export const DIRECTIVES = [ClipboardDirective];

/**
 * Export all shared services.
 */
export const SERVICES = [DataFetchService];
