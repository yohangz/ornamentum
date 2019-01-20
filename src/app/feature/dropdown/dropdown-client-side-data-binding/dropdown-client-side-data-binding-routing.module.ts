import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownClientSideDataBindingComponent } from './index';

/**
 * Represent dropdown client side data binding routes.
 */
const dropdownClientSideDataBindingRoutes: Routes = [
  {
    component: DropdownClientSideDataBindingComponent,
    path: ''
  }
];

/**
 * Dropdown client side data binding routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownClientSideDataBindingRoutes)]
})
export class DropdownClientSideDataBindingRoutingModule {}
