import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownItemGroupingComponent } from './index';

/**
 * Represent dropdown item grouping routes.
 */
const dropdownItemGroupingRoutes: Routes = [
  {
    component: DropdownItemGroupingComponent,
    path: ''
  }
];

/**
 * Dropdown item grouping routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownItemGroupingRoutes)]
})
export class DropdownItemGroupingRoutingModule {}
