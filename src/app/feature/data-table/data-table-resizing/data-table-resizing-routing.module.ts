import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableResizingComponent } from './index';

/**
 * Represent data table resizable routes.
 * @type Routes
 */
const dataTableResizingRoutes: Routes = [
  {
    component: DataTableResizingComponent,
    path: ''
  }
];

/**
 * Data table resizable routing module.
 * @class DataTableResizingRoutingModule
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableResizingRoutes)]
})
export class DataTableResizingRoutingModule {
}
