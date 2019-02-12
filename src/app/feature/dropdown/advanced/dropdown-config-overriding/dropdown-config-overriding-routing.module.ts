import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownConfigOverridingComponent } from './index';

/**
 * Represent dropdown config overriding data binding routes.
 */
const dropdownConfigOverridingRoutes: Routes = [
  {
    component: DropdownConfigOverridingComponent,
    path: ''
  }
];

/**
 * Dropdown config overriding data binding routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownConfigOverridingRoutes)]
})
export class DropdownConfigOverridingRoutingModule {
}
