import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableColumnBindingComponent } from './index';

/**
 * Represent data table resizable routes.
 */
const dataTableColumnBindingRoutes: Routes = [
  {
    component: DataTableColumnBindingComponent,
    path: ''
  }
];

/**
 * Data table column binding routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableColumnBindingRoutes)]
})
export class DataTableColumnBindingRoutingModule {}
