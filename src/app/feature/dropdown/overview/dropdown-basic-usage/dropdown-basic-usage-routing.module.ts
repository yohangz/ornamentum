import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownBasicUsageComponent } from './index';

/**
 * Represent dropdown basic usage routes.
 */
const dropdownBasicUsageRoutes: Routes = [
  {
    component: DropdownBasicUsageComponent,
    path: ''
  }
];

/**
 * Dropdown basic usage routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownBasicUsageRoutes)]
})
export class DropdownBasicUsageRoutingModule {
}
