import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DataTableCustomDataProviderComponent} from "./data-table-custom-data-provider.component";


/**
 * Represent data table server side basic data binding routes.
 */
const dataTableCustomDataProviderRoutes: Routes = [
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
  imports: [RouterModule.forChild(dataTableCustomDataProviderRoutes)]
})
export class DataTableCustomDataProviderRoutingModule {
}
