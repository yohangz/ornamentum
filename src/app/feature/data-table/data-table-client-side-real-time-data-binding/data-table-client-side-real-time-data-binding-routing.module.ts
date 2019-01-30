import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableClientSideRealTimeDataBindingComponent } from './index';

/**
 * Represent data table client side real time data binding routes.
 */
const dataTableClientSideRealTimeDataBindingRoutes: Routes = [
  {
    component: DataTableClientSideRealTimeDataBindingComponent,
    path: ''
  }
];

/**
 * Data table client side real time data binding routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableClientSideRealTimeDataBindingRoutes)]
})
export class DataTableClientSideRealTimeDataBindingRoutingModule {}
