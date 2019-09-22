import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownOptionFilteringComponent } from './index';

/**
 * Represent dropdown option filtering routes.
 */
const dropdownOptionFilteringRoutes: Routes = [
  {
    component: DropdownOptionFilteringComponent,
    path: ''
  }
];

/**
 * Dropdown filtering option routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownOptionFilteringRoutes)]
})
export class DropdownOptionFilteringRoutingModule {
}
