import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownOptionTemplateComponent } from './index';

/**
 * Represent dropdown option template routes.
 * @type Routes
 */
const dropdownOptionTemplateRoutes: Routes = [
  {
    component: DropdownOptionTemplateComponent,
    path: ''
  }
];

/**
 * Dropdown option template routing module.
 * @class DropdownOptionTemplateRoutingModule
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownOptionTemplateRoutes)]
})
export class DropdownOptionTemplateRoutingModule {
}
