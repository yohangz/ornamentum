import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownLazyLoadingComponent } from './index';

/**
 * Represent dropdown lazy loading routes.
 */
const dropdownDataLimitRoutes: Routes = [
  {
    component: DropdownLazyLoadingComponent,
    path: ''
  }
];

/**
 * Dropdown lazy loading routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownDataLimitRoutes)]
})
export class DropdownLazyLoadingRoutingModule {
}
