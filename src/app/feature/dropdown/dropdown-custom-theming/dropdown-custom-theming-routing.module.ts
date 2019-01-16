import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownCustomThemingComponent } from './index';

/**
 * Represent dropdown custom theming routes.
 * @type Routes
 */
const dropdownCustomThemingRoutes: Routes = [
  {
    component: DropdownCustomThemingComponent,
    path: ''
  }
];

/**
 * Dropdown styling and themes routing module.
 * @class DropdownCustomThemingRoutingModule
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownCustomThemingRoutes)]
})
export class DropdownCustomThemingRoutingModule {
}
