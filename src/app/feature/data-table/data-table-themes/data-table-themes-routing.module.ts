import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableThemesComponent } from './index';

/**
 * Represent data table themes routes.
 */
const dataTableThemesRoutes: Routes = [
  {
    component: DataTableThemesComponent,
    path: ''
  }
];

/**
 * Data table themes routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableThemesRoutes)]
})
export class DataTableThemesRoutingModule {}
