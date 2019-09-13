import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownItemFilteringComponent } from './index';

/**
 * Represent dropdown item filtering routes.
 */
const dropdownItemFilteringRoutes: Routes = [
  {
    component: DropdownItemFilteringComponent,
    path: ''
  }
];

/**
 * Dropdown filtering item routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownItemFilteringRoutes)]
})
export class DropdownItemFilteringRoutingModule {
}
