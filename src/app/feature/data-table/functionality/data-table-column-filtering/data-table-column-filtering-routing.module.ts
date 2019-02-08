import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableColumnFilteringComponent } from './index';

/**
 * Represent data table column filtering routes.
 */
const dataTableColumnFilteringRoutes: Routes = [
  {
    component: DataTableColumnFilteringComponent,
    path: ''
  }
];

/**
 * Data table filtering routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableColumnFilteringRoutes)]
})
export class DataTableColumnFilteringRoutingModule {
}
