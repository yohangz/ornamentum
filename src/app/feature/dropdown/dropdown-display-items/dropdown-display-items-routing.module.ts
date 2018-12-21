import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownDisplayItemsComponent } from './index';

/**
 * Represent dropdown display tracked by routes.
 * @type Routes
 */
const dropdownDisplayItemsRoutes: Routes = [
  {
    component: DropdownDisplayItemsComponent,
    path: ''
  }
];

/**
 * Dropdown display items routing module.
 * @class DropdownDisplayItemsRoutingModule
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownDisplayItemsRoutes)]
})
export class DropdownDisplayItemsRoutingModule {
}
