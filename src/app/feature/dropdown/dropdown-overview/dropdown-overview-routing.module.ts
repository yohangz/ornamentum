import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownOverviewComponent } from './index';

/**
 * Represent dropdown overview routes.
 * @type Routes
 */
const dropdownOverviewRoutes: Routes = [
  {
    component: DropdownOverviewComponent,
    path: ''
  }
];

/**
 * Dropdown overview routing module.
 * @class DropdownOverviewRoutingModule
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownOverviewRoutes)]
})
export class DropdownOverviewRoutingModule {
}
