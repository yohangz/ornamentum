import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownFilteringComponent } from './index';

/**
 * Represent dropdown filtering routes.
 * @type Routes
 */
const dropdownFilteringRoutes: Routes = [
  {
    component: DropdownFilteringComponent,
    path: ''
  }
];

/**
 * Dropdown filtering routing module.
 * @class DropdownFilteringRoutingModule
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownFilteringRoutes)]
})
export class DropdownFilteringRoutingModule {
}
