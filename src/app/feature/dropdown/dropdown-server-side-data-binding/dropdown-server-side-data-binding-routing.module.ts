import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownServerSideDataBindingComponent } from './index';

/**
 * Represent dropdown server side data binding routes.
 * @type Routes
 */
const dropdownServerSideDataBindingRoutes: Routes = [
  {
    component: DropdownServerSideDataBindingComponent,
    path: ''
  }
];

/**
 * Dropdown server side data binding routing module.
 * @class DropdownServerSideDataBindingRoutingModule
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownServerSideDataBindingRoutes)]
})
export class DropdownServerSideDataBindingRoutingModule {
}
