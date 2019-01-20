import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownOptionTemplateComponent } from './index';

/**
 * Represent dropdown option template routes.
 */
const dropdownOptionTemplateRoutes: Routes = [
  {
    component: DropdownOptionTemplateComponent,
    path: ''
  }
];

/**
 * Dropdown option template routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownOptionTemplateRoutes)]
})
export class DropdownOptionTemplateRoutingModule {}
