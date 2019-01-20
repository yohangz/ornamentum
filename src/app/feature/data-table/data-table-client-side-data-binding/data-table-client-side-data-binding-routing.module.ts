import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableClientSideDataBindingComponent } from './index';

/**
 * Represent data table client side data binding routes.
 */
const dataTableClientSideDataBindingRoutes: Routes = [
  {
    component: DataTableClientSideDataBindingComponent,
    path: ''
  }
];

/**
 * Data table client side data binding routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableClientSideDataBindingRoutes)]
})
export class DataTableClientSideDataBindingRoutingModule {}
