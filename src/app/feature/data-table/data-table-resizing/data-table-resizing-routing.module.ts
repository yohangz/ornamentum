import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableResizingComponent } from './index';

/**
 * Represent data table resizable routes.
 */
const dataTableResizingRoutes: Routes = [
  {
    component: DataTableResizingComponent,
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
export class DataTableResizingRoutingModule {}
