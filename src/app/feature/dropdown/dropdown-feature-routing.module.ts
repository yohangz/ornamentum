import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  DropdownOverviewComponent,
  DropdownClientSideDataBindingComponent,
  DropdownServerSideDataBindingComponent,
  DropdownRealTimeDataBindingComponent,
  DropdownItemGroupingComponent,
  DropdownFilteringComponent,
  DropdownItemSelectionComponent,
  DropdownLimitComponent,
  DropdownDisablingComponent
} from './components';

/**
 * Represent application dropdown feature module routes.
 * @type Routes
 */
const dropdownFeatureRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'overview'
  },
  {
    component: DropdownOverviewComponent,
    path: 'overview'
  },
  {
    component: DropdownClientSideDataBindingComponent,
    path: 'client-side-data-binding'
  },
  {
    component: DropdownServerSideDataBindingComponent,
    path: 'server-side-data-binding'
  },
  {
    component: DropdownRealTimeDataBindingComponent,
    path: 'real-time-data-binding'
  },
  {
    component: DropdownItemGroupingComponent,
    path: 'grouping'
  },
  {
    component: DropdownFilteringComponent,
    path: 'filtering'
  },
  {
    component: DropdownItemSelectionComponent,
    path: 'item-selection'
  },
  {
    component: DropdownLimitComponent,
    path: 'limit'
  },
  {
    component: DropdownDisablingComponent,
    path: 'disable'
  },
  {
    // component: DropdownLimitComponent,
    path: 'disabled-options'
  },
  {
    // component: DropdownLimitComponent,
    path: 'display-tracked-by'
  },
  {
    // component: DropdownLimitComponent,
    path: 'load-on-scroll'
  },
  {
    // component: DropdownLimitComponent,
    path: 'menu-position'
  },
  {
    // component: DropdownLimitComponent,
    path: 'menu-height'
  },
  {
    // component: DropdownLimitComponent,
    path: 'menu-width'
  },
  {
    // component: DropdownLimitComponent,
    path: 'load-data-on-init'
  },
  {
    // component: DropdownLimitComponent,
    path: 'on-data-bind'
  },
  {
    // component: DropdownLimitComponent,
    path: 'trigger-select-change-on-init'
  },
  {
    // component: DropdownLimitComponent,
    path: 'trigger-select-change-on-first-option-select'
  },
  {
    // component: DropdownLimitComponent,
    path: 'trigger-select-change-on-model-update'
  },
  {
    // component: DropdownLimitComponent,
    path: 'wrap-display-select-limit'
  },
  {
    // component: DropdownLimitComponent,
    path: 'translations'
  },
  {
    // component: DropdownLimitComponent,
    path: 'events'
  }
];

/**
 * Application dropdown feature routing module.
 * @class DropdownFeatureRoutingModule
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownFeatureRoutes)]
})
export class DropdownFeatureRoutingModule {
}
