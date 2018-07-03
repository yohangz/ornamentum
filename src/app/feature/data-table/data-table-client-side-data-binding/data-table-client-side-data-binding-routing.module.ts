import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableClientSideDataBindingComponent } from './index';

/**
 * Represent data table client side data binding routes.
 * @type Routes
 */
const dataTableClientSideDataBindingRoutes: Routes = [
  {
    component: DataTableClientSideDataBindingComponent,
    path: ''
  }
];

/**
 * Data table client side data binding routing module.
 * @class DataTableClientSideDataBindingRoutingModule
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableClientSideDataBindingRoutes)]
})
export class DataTableClientSideDataBindingRoutingModule {
}
