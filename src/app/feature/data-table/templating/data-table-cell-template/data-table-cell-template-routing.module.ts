import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableCellTemplateComponent } from './index';

/**
 * Represent data table cell template routes.
 */
const dataTableCellTemplateRoutes: Routes = [
  {
    component: DataTableCellTemplateComponent,
    path: ''
  }
];

/**
 * Data table cell template routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableCellTemplateRoutes)]
})
export class DataTableCellTemplateRoutingModule {
}
