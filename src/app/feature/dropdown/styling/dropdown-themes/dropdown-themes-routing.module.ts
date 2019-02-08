import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownThemesComponent } from './index';

/**
 * Represent dropdown themes routes.
 */
const dropdownThemesRoutes: Routes = [
  {
    component: DropdownThemesComponent,
    path: ''
  }
];

/**
 * Dropdown themes routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownThemesRoutes)]
})
export class DropdownThemesRoutingModule {
}
