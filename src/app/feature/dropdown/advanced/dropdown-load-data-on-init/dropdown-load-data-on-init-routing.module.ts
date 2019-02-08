import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownLoadDataOnInitComponent } from './index';

/**
 * Represent dropdown load data on init routes.
 */
const dropdownLoadDataOnInitRoutes: Routes = [
  {
    component: DropdownLoadDataOnInitComponent,
    path: ''
  }
];

/**
 * Dropdown load data on init routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownLoadDataOnInitRoutes)]
})
export class DropdownLoadDataOnInitRoutingModule {}
