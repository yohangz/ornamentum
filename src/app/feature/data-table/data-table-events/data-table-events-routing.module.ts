import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableEventsComponent } from './index';

/**
 * Represent data table events routes.
 * @type Routes
 */
const dataTableEventRoutes: Routes = [
  {
    component: DataTableEventsComponent,
    path: ''
  }
];

/**
 * Data table events routing module.
 * @class DataTableEventsRoutingModule
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableEventRoutes)]
})
export class DataTableEventsRoutingModule {
}
