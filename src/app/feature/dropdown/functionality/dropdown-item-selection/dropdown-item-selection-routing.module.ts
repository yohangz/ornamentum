import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownItemSelectionComponent } from './index';

/**
 * Represent dropdown item selection routes.
 */
const dropdownItemSelectionRoutes: Routes = [
  {
    component: DropdownItemSelectionComponent,
    path: ''
  }
];

/**
 * Dropdown item selection routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownItemSelectionRoutes)]
})
export class DropdownItemSelectionRoutingModule {
}
