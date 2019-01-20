import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableNoRecordsTemplateComponent } from './index';

/**
 * Represent data table no records template routes.
 */
const dataTableNoRecordsTemplateRoutes: Routes = [
  {
    component: DataTableNoRecordsTemplateComponent,
    path: ''
  }
];

/**
 * Data table no records template routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableNoRecordsTemplateRoutes)]
})
export class DataTableNoRecordsTemplateRoutingModule {}
