import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownOptionDisplayValueComponent } from './index';

/**
 * Represent dropdown option display routes.
 */
const dropdownOptionDisplayRoutes: Routes = [
  {
    component: DropdownOptionDisplayValueComponent,
    path: ''
  }
];

/**
 * Dropdown option display routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownOptionDisplayRoutes)]
})
export class DropdownOptionDisplayValueRoutingModule {
}
