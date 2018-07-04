import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownItemGroupingComponent } from './index';

/**
 * Represent dropdown item grouping routes.
 * @type Routes
 */
const dropdownItemGroupingRoutes: Routes = [
  {
    component: DropdownItemGroupingComponent,
    path: ''
  }
];

/**
 * Dropdown item grouping routing module.
 * @class DropdownItemGroupingRoutingModule
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownItemGroupingRoutes)]
})
export class DropdownItemGroupingRoutingModule {
}
