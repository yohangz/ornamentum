import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableLimitComponent } from './index';

/**
 * Represent data table limit routes.
 * @type Routes
 */
const dataTableLimitRoutes: Routes = [
  {
    component: DataTableLimitComponent,
    path: ''
  }
];

/**
 * Data table limit routing module.
 * @class DataTableLimitRoutingModule
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableLimitRoutes)]
})
export class DataTableLimitRoutingModule {
}
