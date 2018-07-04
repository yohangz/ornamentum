import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownDisplayTrackedByComponent } from './index';

/**
 * Represent dropdown display tracked by routes.
 * @type Routes
 */
const dropdownDisplayTrackedByRoutes: Routes = [
  {
    component: DropdownDisplayTrackedByComponent,
    path: ''
  }
];

/**
 * Dropdown display tracked by routing module.
 * @class DropdownDisplayTrackedByRoutingModule
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownDisplayTrackedByRoutes)]
})
export class DropdownDisplayTrackedByRoutingModule {
}
