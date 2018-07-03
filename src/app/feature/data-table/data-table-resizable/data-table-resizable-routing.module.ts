import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableResizableComponent } from './index';

/**
 * Represent data table resizable routes.
 * @type Routes
 */
const dataTableResizableRoutes: Routes = [
  {
    component: DataTableResizableComponent,
    path: ''
  }
];

/**
 * Data table resizable routing module.
 * @class DataTableResizableRoutingModule
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableResizableRoutes)]
})
export class DataTableResizableRoutingModule {
}
