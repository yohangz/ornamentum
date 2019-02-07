import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableClientSideStreamComponent } from './index';

/**
 * Represent data table client side stream data binding routes.
 */
const dataTableClientSideStreamRoutes: Routes = [
  {
    component: DataTableClientSideStreamComponent,
    path: ''
  }
];

/**
 * Data table client side stream data binding routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableClientSideStreamRoutes)]
})
export class DataTableClientSideStreamRoutingModule {}
