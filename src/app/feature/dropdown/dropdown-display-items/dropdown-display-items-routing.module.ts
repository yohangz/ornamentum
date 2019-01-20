import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownDisplayItemsComponent } from './index';

/**
 * Represent dropdown display tracked by routes.
 */
const dropdownDisplayItemsRoutes: Routes = [
  {
    component: DropdownDisplayItemsComponent,
    path: ''
  }
];

/**
 * Dropdown display items routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownDisplayItemsRoutes)]
})
export class DropdownDisplayItemsRoutingModule {}
