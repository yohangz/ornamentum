import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableServerSideRealTimeDataBindingComponent } from './index';

/**
 * Represent data table server side real time data binding routes.
 */
const dataTableServerSideRealTimeDataBindingRoutes: Routes = [
  {
    component: DataTableServerSideRealTimeDataBindingComponent,
    path: ''
  }
];

/**
 * Data table server side real time data binding routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableServerSideRealTimeDataBindingRoutes)]
})
export class DataTableServerSideRealTimeDataBindingRoutingModule {}
