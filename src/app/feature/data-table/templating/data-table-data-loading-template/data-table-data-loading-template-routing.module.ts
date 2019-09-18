import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableDataLoadingTemplateComponent } from './index';

/**
 * Represent data table data loading template routes.
 */
const dataTableDataLoadingTemplateRoutes: Routes = [
  {
    component: DataTableDataLoadingTemplateComponent,
    path: ''
  }
];

/**
 * Data table data loading template routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableDataLoadingTemplateRoutes)]
})
export class DataTableDataLoadingTemplateRoutingModule {
}
