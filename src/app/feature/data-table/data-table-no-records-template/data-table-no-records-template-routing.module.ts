import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableNoRecordsTemplateComponent } from './index';

/**
 * Represent data table no records template routes.
 * @type Routes
 */
const dataTableNoRecordsTemplateRoutes: Routes = [
  {
    component: DataTableNoRecordsTemplateComponent,
    path: ''
  }
];

/**
 * Data table no records template routing module.
 * @class DataTableNoRecordsTemplateRoutingModule
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableNoRecordsTemplateRoutes)]
})
export class DataTableNoRecordsTemplateRoutingModule {
}
