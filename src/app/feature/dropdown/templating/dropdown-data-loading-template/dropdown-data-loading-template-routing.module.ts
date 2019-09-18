import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownDataLoadingTemplateComponent } from './index';

/**
 * Represent dropdown data loading template routes.
 */
const dropdownDataLoadingTemplateRoutes: Routes = [
  {
    component: DropdownDataLoadingTemplateComponent,
    path: ''
  }
];

/**
 * Dropdown data loading template routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownDataLoadingTemplateRoutes)]
})
export class DropdownDataLoadingTemplateRoutingModule {
}
