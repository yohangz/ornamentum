import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownOptionSelectionComponent } from './index';

/**
 * Represent dropdown option selection routes.
 */
const dropdownOptionSelectionRoutes: Routes = [
  {
    component: DropdownOptionSelectionComponent,
    path: ''
  }
];

/**
 * Dropdown option selection routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownOptionSelectionRoutes)]
})
export class DropdownOptionSelectionRoutingModule {
}
