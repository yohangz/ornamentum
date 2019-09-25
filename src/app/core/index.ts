import { MainMenuComponent, LeftNavigationComponent, RightNavigationComponent } from './components';

import { NavigationService, ScrollService } from './services';

import { ClickOutsideDirective } from './directives';

/**
 * Export all core components.
 */
export const COMPONENTS = [MainMenuComponent, LeftNavigationComponent, RightNavigationComponent];

export const SERVICES = [NavigationService, ScrollService];

export const DIRECTIVES = [ClickOutsideDirective];
