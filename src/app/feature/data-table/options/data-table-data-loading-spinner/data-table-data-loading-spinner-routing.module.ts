import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableDataLoadingSpinnerComponent } from './index';

/**
 * Represent data table data loading spinner routes.
 */
const dataTableDataLoadingSpinnerRoutes: Routes = [
  {
    component: DataTableDataLoadingSpinnerComponent,
    path: ''
  }
];

/**
 * Data table data loading spinner routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableDataLoadingSpinnerRoutes)]
})
export class DataTableDataLoadingSpinnerRoutingModule {}
