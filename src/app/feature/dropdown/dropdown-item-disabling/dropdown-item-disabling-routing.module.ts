import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownItemDisablingComponent } from './index';

/**
 * Represent dropdown item disabling routes.
 * @type Routes
 */
const dropdownItemDisablingRoutes: Routes = [
  {
    component: DropdownItemDisablingComponent,
    path: ''
  }
];

/**
 * Dropdown item disabling routing module.
 * @class DropdownItemDisablingRoutingModule
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownItemDisablingRoutes)]
})
export class DropdownItemDisablingRoutingModule {
}
