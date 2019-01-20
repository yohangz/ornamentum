import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableLoadingSpinnerComponent } from './index';

/**
 * Represent data table loading spinner routes.
 */
const dataTableOverviewRoutes: Routes = [
  {
    component: DataTableLoadingSpinnerComponent,
    path: ''
  }
];

/**
 * Data table loading spinner routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableOverviewRoutes)]
})
export class DataTableLoadingSpinnerRoutingModule {}
