import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownLimitComponent } from './index';

/**
 * Represent dropdown limit routes.
 * @type Routes
 */
const dropdownLimitRoutes: Routes = [
  {
    component: DropdownLimitComponent,
    path: ''
  }
];

/**
 * Dropdown limit routing module.
 * @class DropdownLimitRoutingModule
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownLimitRoutes)]
})
export class DropdownLimitRoutingModule {
}
