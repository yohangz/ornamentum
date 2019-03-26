import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableSortingComponent } from './index';

/**
 * Represent data table sorting routes.
 */
const dataTableSortingRoutes: Routes = [
  {
    component: DataTableSortingComponent,
    path: ''
  }
];

/**
 * Data table sorting routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableSortingRoutes)]
})
export class DataTableSortingRoutingModule {
}
