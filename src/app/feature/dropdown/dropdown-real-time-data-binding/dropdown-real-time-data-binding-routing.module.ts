import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownRealTimeDataBindingComponent } from './index';

/**
 * Represent dropdown real time data binding routes.
 */
const dropdownRealTimeDataBindingRoutes: Routes = [
  {
    component: DropdownRealTimeDataBindingComponent,
    path: ''
  }
];

/**
 * Dropdown real time data binding routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownRealTimeDataBindingRoutes)]
})
export class DropdownRealTimeDataBindingRoutingModule {}
