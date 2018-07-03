import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableFilteringComponent } from './index';

/**
 * Represent data table filtering routes.
 * @type Routes
 */
const dataTableFilteringRoutes: Routes = [
  {
    component: DataTableFilteringComponent,
    path: ''
  }
];

/**
 * Data table filtering routing module.
 * @class DataTableFilteringRoutingModule
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableFilteringRoutes)]
})
export class DataTableFilteringRoutingModule {
}
