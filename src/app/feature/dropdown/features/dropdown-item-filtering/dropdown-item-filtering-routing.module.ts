import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownItemFilteringComponent } from './index';

/**
 * Represent dropdown filtering routes.
 */
const dropdownFilteringRoutes: Routes = [
  {
    component: DropdownItemFilteringComponent,
    path: ''
  }
];

/**
 * Dropdown filtering routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownFilteringRoutes)]
})
export class DropdownItemFilteringRoutingModule {
}
