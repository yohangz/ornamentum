import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableSubstituteRowsComponent } from './index';

/**
 * Represent data table substitute rows routes.
 */
const dataTableSubstituteRowsRoutes: Routes = [
  {
    component: DataTableSubstituteRowsComponent,
    path: ''
  }
];

/**
 * Data table substitute rows routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableSubstituteRowsRoutes)]
})
export class DataTableSubstituteRowsRoutingModule {}
