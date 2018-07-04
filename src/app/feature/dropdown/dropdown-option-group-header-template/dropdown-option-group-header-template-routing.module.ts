import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownOptionGroupHeaderTemplateComponent } from './index';

/**
 * Represent dropdown option group header template routes.
 * @type Routes
 */
const dropdownOptionGroupHeaderTemplateRoutes: Routes = [
  {
    component: DropdownOptionGroupHeaderTemplateComponent,
    path: ''
  }
];

/**
 * Dropdown option group header template routing module.
 * @class DropdownOptionGroupHeaderTemplateRoutingModule
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownOptionGroupHeaderTemplateRoutes)]
})
export class DropdownOptionGroupHeaderTemplateRoutingModule {
}
