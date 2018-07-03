import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableResponsiveConfComponent } from './index';

/**
 * Represent data table responsive conf routes.
 * @type Routes
 */
const dataTableResponsiveConfRoutes: Routes = [
  {
    component: DataTableResponsiveConfComponent,
    path: ''
  }
];

/**
 * Data table responsive conf routing module.
 * @class DataTableResponsiveConfRoutingModule
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableResponsiveConfRoutes)]
})
export class DataTableResponsiveConfRoutingModule {
}
