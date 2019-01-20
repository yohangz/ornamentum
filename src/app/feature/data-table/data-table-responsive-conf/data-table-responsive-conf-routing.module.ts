import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableResponsiveConfComponent } from './index';

/**
 * Represent data table responsive conf routes.
 */
const dataTableResponsiveConfRoutes: Routes = [
  {
    component: DataTableResponsiveConfComponent,
    path: ''
  }
];

/**
 * Data table responsive conf routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableResponsiveConfRoutes)]
})
export class DataTableResponsiveConfRoutingModule {}
