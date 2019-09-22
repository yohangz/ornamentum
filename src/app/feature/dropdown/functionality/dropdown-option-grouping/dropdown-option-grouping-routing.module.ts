import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownOptionGroupingComponent } from './index';

/**
 * Represent dropdown option grouping routes.
 */
const dropdownOptionGroupingRoutes: Routes = [
  {
    component: DropdownOptionGroupingComponent,
    path: ''
  }
];

/**
 * Dropdown option grouping routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownOptionGroupingRoutes)]
})
export class DropdownOptionGroupingRoutingModule {
}
