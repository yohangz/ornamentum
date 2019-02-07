import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableServerSideBasicComponent } from './index';

/**
 * Represent data table server side basic data binding routes.
 */
const dataTableServerSideBasicRoutes: Routes = [
  {
    component: DataTableServerSideBasicComponent,
    path: ''
  }
];

/**
 * Data table server side basic data binding routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableServerSideBasicRoutes)]
})
export class DataTableServerSideBasicRoutingModule {}
