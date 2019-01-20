import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownOverviewComponent } from './index';

/**
 * Represent dropdown overview routes.
 */
const dropdownOverviewRoutes: Routes = [
  {
    component: DropdownOverviewComponent,
    path: ''
  }
];

/**
 * Dropdown overview routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownOverviewRoutes)]
})
export class DropdownOverviewRoutingModule {}
