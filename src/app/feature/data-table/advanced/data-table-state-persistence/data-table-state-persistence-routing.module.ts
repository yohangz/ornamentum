import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableStatePersistenceComponent } from './index';

/**
 * Represent data table state persistence routes.
 */
const dataTableStatePersistRoutes: Routes = [
  {
    component: DataTableStatePersistenceComponent,
    path: ''
  }
];

/**
 * Data table state persistence routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableStatePersistRoutes)]
})
export class DataTableStatePersistenceRoutingModule {
}
