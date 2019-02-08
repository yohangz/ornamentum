import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownDisablingComponent } from './index';

/**
 * Represent dropdown disabling routes.
 */
const dropdownDisablingRoutes: Routes = [
  {
    component: DropdownDisablingComponent,
    path: ''
  }
];

/**
 * Dropdown disabling routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownDisablingRoutes)]
})
export class DropdownDisablingRoutingModule {}
