import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownMenuPositionComponent } from './index';

/**
 * Represent dropdown menu position routes.
 */
const dropdownMenuPositionRoutes: Routes = [
  {
    component: DropdownMenuPositionComponent,
    path: ''
  }
];

/**
 * Dropdown menu position routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownMenuPositionRoutes)]
})
export class DropdownMenuPositionRoutingModule {
}
