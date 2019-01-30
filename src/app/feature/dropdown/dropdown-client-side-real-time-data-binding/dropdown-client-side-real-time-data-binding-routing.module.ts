import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownClientSideRealTimeDataBindingComponent } from './index';

/**
 * Represent dropdown client side real time data binding routes.
 */
const dropdownClientSideRealTimeDataBindingRoutes: Routes = [
  {
    component: DropdownClientSideRealTimeDataBindingComponent,
    path: ''
  }
];

/**
 * Dropdown client side real time data binding routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownClientSideRealTimeDataBindingRoutes)]
})
export class DropdownClientSideRealTimeDataBindingRoutingModule {}
