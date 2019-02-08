import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableColumnSortingComponent } from './index';

/**
 * Represent data table column sorting routes.
 */
const dataTableSortingRoutes: Routes = [
  {
    component: DataTableColumnSortingComponent,
    path: ''
  }
];

/**
 * Data table column sorting routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableSortingRoutes)]
})
export class DataTableColumnSortingRoutingModule {
}
