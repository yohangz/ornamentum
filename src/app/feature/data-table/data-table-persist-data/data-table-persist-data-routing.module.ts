import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTablePersistDataComponent } from './index';

/**
 * Represent data table persist data routes.
 */
const dataTablePersistDataRoutes: Routes = [
  {
    component: DataTablePersistDataComponent,
    path: ''
  }
];

/**
 * Data table persist data routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTablePersistDataRoutes)]
})
export class DataTablePersistDataRoutingModule {}
