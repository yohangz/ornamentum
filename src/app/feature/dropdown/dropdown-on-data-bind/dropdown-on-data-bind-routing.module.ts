import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownOnDataBindComponent } from './index';

/**
 * Represent dropdown on data bind routes.
 * @type Routes
 */
const dropdownOnDataBindRoutes: Routes = [
  {
    component: DropdownOnDataBindComponent,
    path: ''
  }
];

/**
 * Dropdown on data bind routing module.
 * @class DropdownOnDataBindRoutingModule
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownOnDataBindRoutes)]
})
export class DropdownOnDataBindRoutingModule {
}
