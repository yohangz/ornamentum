import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownLoadOnInitComponent } from './index';

/**
 * Represent dropdown load on init routes.
 * @type Routes
 */
const dropdownLoadOnInitRoutes: Routes = [
  {
    component: DropdownLoadOnInitComponent,
    path: ''
  }
];

/**
 * Dropdown load on init routing module.
 * @class DropdownLoadOnInitRoutingModule
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownLoadOnInitRoutes)]
})
export class DropdownLoadOnInitRoutingModule {
}
