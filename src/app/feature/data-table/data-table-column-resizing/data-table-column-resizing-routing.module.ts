import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableColumnResizingComponent } from './index';

/**
 * Represent data table resizable routes.
 */
const dataTableResizingRoutes: Routes = [
  {
    component: DataTableColumnResizingComponent,
    path: ''
  }
];

/**
 * Data table resizable routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableResizingRoutes)]
})
export class DataTableColumnResizingRoutingModule {}
