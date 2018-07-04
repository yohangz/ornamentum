import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownLoadOnScrollComponent } from './index';

/**
 * Represent dropdown load on scroll routes.
 * @type Routes
 */
const dropdownLoadOnScrollRoutes: Routes = [
  {
    component: DropdownLoadOnScrollComponent,
    path: ''
  }
];

/**
 * Dropdown load on scroll routing module.
 * @class DropdownLoadOnScrollRoutingModule
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownLoadOnScrollRoutes)]
})
export class DropdownLoadOnScrollRoutingModule {
}
