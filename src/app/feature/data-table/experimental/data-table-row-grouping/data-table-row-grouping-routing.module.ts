import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableRowGroupingComponent } from './index';

/**
 * Represent data table row grouping routes.
 */
const dataTableRowGroupingRoutes: Routes = [
  {
    component: DataTableRowGroupingComponent,
    path: ''
  }
];

/**
 * Data table row grouping routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableRowGroupingRoutes)]
})
export class DataTableRowGroupingRoutingModule {
}
