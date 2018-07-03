import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableOverviewComponent } from './index';

/**
 * Represent dropdown client side data binding routes.
 * @type Routes
 */
const dataTableOverviewRoutes: Routes = [
  {
    component: DataTableOverviewComponent,
    path: ''
  }
];

/**
 * Data table overview routing module.
 * @class DataTableOverviewRoutingModule
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableOverviewRoutes)]
})
export class DataTableOverviewRoutingModule {
}
