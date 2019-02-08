import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableServerSideWebSocketComponent } from './index';

/**
 * Represent data table server side web socket data binding routes.
 */
const dataTableServerSideWebSocketRoutes: Routes = [
  {
    component: DataTableServerSideWebSocketComponent,
    path: ''
  }
];

/**
 * Data table server side web socket data binding routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableServerSideWebSocketRoutes)]
})
export class DataTableServerSideWebSocketRoutingModule {
}
