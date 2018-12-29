import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableStylingAndThemesComponent } from './index';

/**
 * Represent data table styling and themes routes.
 * @type Routes
 */
const dataTableStylingAndThemesRoutes: Routes = [
  {
    component: DataTableStylingAndThemesComponent,
    path: ''
  }
];

/**
 * Data table styling and themes routing module.
 * @class DataTableStylingAndThemesRoutingModule
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableStylingAndThemesRoutes)]
})
export class DataTableStylingAndThemesRoutingModule {
}
