import {
  MainMenuComponent,
  LeftNavigationComponent,
  RightNavigationComponent
} from './components';

import {
  NavigationService,
  ScrollService
} from './services';

/**
 * Export all core components.
 */
export const COMPONENTS = [
  MainMenuComponent,
  LeftNavigationComponent,
  RightNavigationComponent
];

export const SERVICES = [
  NavigationService,
  ScrollService
];
