import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownClientSideBasicComponent } from './index';

/**
 * Represent dropdown client side basic data binding routes.
 */
const dropdownClientSideBasicRoutes: Routes = [
  {
    component: DropdownClientSideBasicComponent,
    path: ''
  }
];

/**
 * Dropdown client side basic data binding routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownClientSideBasicRoutes)]
})
export class DropdownClientSideBasicRoutingModule {}
