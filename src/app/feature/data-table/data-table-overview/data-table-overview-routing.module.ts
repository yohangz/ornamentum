import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableOverviewComponent } from './index';

/**
 * Data table overview routes.
 */
const dataTableOverviewRoutes: Routes = [
  {
    component: DataTableOverviewComponent,
    path: ''
  }
];

/**
 * Data table overview routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableOverviewRoutes)]
})
export class DataTableOverviewRoutingModule {}
