import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableStatePersistenceComponent } from './index';

/**
 * Represent data table persist data routes.
 */
const dataTablePersistDataRoutes: Routes = [
  {
    component: DataTableStatePersistenceComponent,
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
export class DataTableStatePersistenceRoutingModule {}
