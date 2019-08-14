import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableCustomDataProviderComponent } from './components/data-table-custom-data-provider.component';

/**
 * Represent data table server side basic data binding routes.
 */
const dataTableCustomDataBindingRoutes: Routes = [
  {
    component: DataTableCustomDataProviderComponent,
    path: ''
  }
];

/**
 * Data table server side basic data binding routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableCustomDataBindingRoutes)]
})
export class DataTableCustomDataProviderRoutingModule {}
