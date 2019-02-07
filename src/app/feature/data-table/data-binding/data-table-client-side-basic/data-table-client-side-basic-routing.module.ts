import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableClientSideBasicComponent } from './index';

/**
 * Represent data table client side basic data binding routes.
 */
const dataTableClientSideBasicRoutes: Routes = [
  {
    component: DataTableClientSideBasicComponent,
    path: ''
  }
];

/**
 * Data table client side basic data binding routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableClientSideBasicRoutes)]
})
export class DataTableClientSideBasicRoutingModule {}
