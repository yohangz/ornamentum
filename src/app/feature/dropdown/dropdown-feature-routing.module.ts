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
  DropdownDisablingComponent,
  DropdownItemDisablingComponent,
  DropdownDisplayTrackedByComponent,
  DropdownLoadOnScrollComponent,
  DropdownMenuPositionComponent,
  DropdownMenuWidthHeightComponent,
  DropdownLoadOnInitComponent,
  DropdownOnDataBindComponent
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
    component: DropdownItemDisablingComponent,
    path: 'item-disabling'
  },
  {
    component: DropdownDisplayTrackedByComponent,
    path: 'display-tracked-by'
  },
  {
    component: DropdownLoadOnScrollComponent,
    path: 'load-on-scroll'
  },
  {
    component: DropdownMenuPositionComponent,
    path: 'menu-position'
  },
  {
    component: DropdownMenuWidthHeightComponent,
    path: 'menu-width-height'
  },
  {
    component: DropdownLoadOnInitComponent,
    path: 'load-data-on-init'
  },
  {
    component: DropdownOnDataBindComponent,
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
