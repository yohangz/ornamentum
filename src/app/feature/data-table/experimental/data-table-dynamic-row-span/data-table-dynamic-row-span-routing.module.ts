import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableDynamicRowSpanComponent } from './index';

/**
 * Represent data table dynamic row span routes.
 */
const dataTableDynamicRowSpanRoutes: Routes = [
  {
    component: DataTableDynamicRowSpanComponent,
    path: ''
  }
];

/**
 * Data table dynamic row span routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableDynamicRowSpanRoutes)]
})
export class DataTableDynamicRowSpanRoutingModule {
}
