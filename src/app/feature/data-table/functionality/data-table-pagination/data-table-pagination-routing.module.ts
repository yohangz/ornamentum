import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTablePaginationComponent } from './index';

/**
 * Represent data table pagination routes.
 */
const dataTablePaginationRoutes: Routes = [
  {
    component: DataTablePaginationComponent,
    path: ''
  }
];

/**
 * Data table pagination routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTablePaginationRoutes)]
})
export class DataTablePaginationRoutingModule {
}
