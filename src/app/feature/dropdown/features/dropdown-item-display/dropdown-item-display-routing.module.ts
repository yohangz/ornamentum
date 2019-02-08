import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownItemDisplayComponent } from './index';

/**
 * Represent dropdown item display routes.
 */
const dropdownItemDisplayRoutes: Routes = [
  {
    component: DropdownItemDisplayComponent,
    path: ''
  }
];

/**
 * Dropdown item display routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownItemDisplayRoutes)]
})
export class DropdownItemDisplayRoutingModule {
}
