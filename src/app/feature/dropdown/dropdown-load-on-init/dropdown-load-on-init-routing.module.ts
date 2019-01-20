import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownLoadOnInitComponent } from './index';

/**
 * Represent dropdown load on init routes.
 */
const dropdownLoadOnInitRoutes: Routes = [
  {
    component: DropdownLoadOnInitComponent,
    path: ''
  }
];

/**
 * Dropdown load on init routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownLoadOnInitRoutes)]
})
export class DropdownLoadOnInitRoutingModule {}
