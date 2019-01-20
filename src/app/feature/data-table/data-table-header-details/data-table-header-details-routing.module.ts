import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableHeaderDetailsComponent } from './index';

/**
 * Represent data table header details  routes.
 */
const dataTableHeaderDetailsRoutes: Routes = [
  {
    component: DataTableHeaderDetailsComponent,
    path: ''
  }
];

/**
 * Data table header details routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableHeaderDetailsRoutes)]
})
export class DataTableHeaderDetailsRoutingModule {}
