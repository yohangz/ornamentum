import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownOptionDisablingComponent } from './index';

/**
 * Represent dropdown option disabling routes.
 */
const dropdownOptionDisablingRoutes: Routes = [
  {
    component: DropdownOptionDisablingComponent,
    path: ''
  }
];

/**
 * Dropdown option disabling routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownOptionDisablingRoutes)]
})
export class DropdownOptionDisablingRoutingModule {
}
