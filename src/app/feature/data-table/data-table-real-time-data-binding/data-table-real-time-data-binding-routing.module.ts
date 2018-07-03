import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableRealTimeDataBindingComponent } from './index';

/**
 * Represent data table real time data binding routes.
 * @type Routes
 */
const dataTableRealTimeDataBindingRoutes: Routes = [
  {
    component: DataTableRealTimeDataBindingComponent,
    path: ''
  }
];

/**
 * Data table real time data binding routing module.
 * @class DataTableRealTimeDataBindingRoutingModule
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableRealTimeDataBindingRoutes)]
})
export class DataTableRealTimeDataBindingRoutingModule {
}
