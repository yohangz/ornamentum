import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownItemSelectionComponent } from './index';

/**
 * Represent dropdown item selection routes.
 * @type Routes
 */
const dropdownItemSelectionRoutes: Routes = [
  {
    component: DropdownItemSelectionComponent,
    path: ''
  }
];

/**
 * Dropdown item selection routing module.
 * @class DropdownItemSelectionRoutingModule
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownItemSelectionRoutes)]
})
export class DropdownItemSelectionRoutingModule {
}
