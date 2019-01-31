import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownServerSideRealTimeDataBindingComponent } from './index';

/**
 * Represent server client side real time data binding routes.
 */
const dropdownServerSideRealTimeDataBindingRoutes: Routes = [
  {
    component: DropdownServerSideRealTimeDataBindingComponent,
    path: ''
  }
];

/**
 * Dropdown server side real time data binding routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownServerSideRealTimeDataBindingRoutes)]
})
export class DropdownServerSideRealTimeDataBindingRoutingModule {}
