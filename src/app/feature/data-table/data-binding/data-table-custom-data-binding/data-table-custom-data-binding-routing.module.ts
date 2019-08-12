import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DataTableCustomDataBindingComponent} from "./data-table-custom-data-binding.component";


/**
 * Represent data table server side basic data binding routes.
 */
const dataTableCustomDataBindingRoutes: Routes = [
  {
    component: DataTableCustomDataBindingComponent,
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
export class DataTableCustomDataBindingRoutingModule {
}
