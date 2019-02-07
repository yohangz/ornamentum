import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableBasicUsageComponent } from './index';

/**
 * Data table basic usage routes.
 */
const dataTableBasicUsageRoutes: Routes = [
  {
    component: DataTableBasicUsageComponent,
    path: ''
  }
];

/**
 * Data table basic usage routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableBasicUsageRoutes)]
})
export class DataTableBasicUsageRoutingModule {}
