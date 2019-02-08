import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownClientSideStreamComponent } from './index';

/**
 * Represent dropdown client side stream data binding routes.
 */
const dropdownClientSideStreamRoutes: Routes = [
  {
    component: DropdownClientSideStreamComponent,
    path: ''
  }
];

/**
 * Dropdown client side stream data binding routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownClientSideStreamRoutes)]
})
export class DropdownClientSideStreamRoutingModule {
}
