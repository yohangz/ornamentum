import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownMenuPositionComponent } from './index';

/**
 * Represent dropdown menu position routes.
 * @type Routes
 */
const dropdownMenuPositionRoutes: Routes = [
  {
    component: DropdownMenuPositionComponent,
    path: ''
  }
];

/**
 * Dropdown menu position routing module.
 * @class DropdownMenuPositionRoutingModule
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownMenuPositionRoutes)]
})
export class DropdownMenuPositionRoutingModule {
}
