import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableServerSideDataBindingComponent } from './index';

/**
 * Represent data table server side data binding routes.
 * @type Routes
 */
const dataTableServerSideDataBindingRoutes: Routes = [
  {
    component: DataTableServerSideDataBindingComponent,
    path: ''
  }
];

/**
 * Data table server side data binding routing module.
 * @class DataTableServerSideDataBindingRoutingModule
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableServerSideDataBindingRoutes)]
})
export class DataTableServerSideDataBindingRoutingModule {
}
