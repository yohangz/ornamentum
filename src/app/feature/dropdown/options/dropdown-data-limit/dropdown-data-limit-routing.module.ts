import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownDataLimitComponent } from './index';

/**
 * Represent dropdown data limit routes.
 */
const dropdownDataLimitRoutes: Routes = [
  {
    component: DropdownDataLimitComponent,
    path: ''
  }
];

/**
 * Dropdown data limit routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownDataLimitRoutes)]
})
export class DropdownDataLimitRoutingModule {
}
