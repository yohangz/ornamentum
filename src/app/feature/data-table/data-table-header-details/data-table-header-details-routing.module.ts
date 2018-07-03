import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableHeaderDetailsComponent } from './index';

/**
 * Represent data table header details  routes.
 * @type Routes
 */
const dataTableHeaderDetailsRoutes: Routes = [
  {
    component: DataTableHeaderDetailsComponent,
    path: ''
  }
];

/**
 * Data table header details routing module.
 * @class DataTableHeaderDetailsRoutingModule
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableHeaderDetailsRoutes)]
})
export class DataTableHeaderDetailsRoutingModule {
}
