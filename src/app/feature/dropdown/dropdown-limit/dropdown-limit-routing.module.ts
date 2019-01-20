import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownLimitComponent } from './index';

/**
 * Represent dropdown limit routes.
 */
const dropdownLimitRoutes: Routes = [
  {
    component: DropdownLimitComponent,
    path: ''
  }
];

/**
 * Dropdown limit routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownLimitRoutes)]
})
export class DropdownLimitRoutingModule {}
