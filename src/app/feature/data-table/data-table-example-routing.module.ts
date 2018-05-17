import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableBaseComponent } from './data-table-main/components/data-table-base/data-table-base.component';

/**
 * Represent application data table example module routes.
 * @type Routes
 */
const dataTableExampleRoutes: Routes = [
  {
    component: DataTableBaseComponent,
    loadChildren: './data-table-feature/data-table-feature.module#DataTableFeatureModule',
    path: ''
  }
];

/**
 * Application data table example routing module.
 * @class DataTableExampleRoutingModule
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableExampleRoutes)]
})
export class DataTableExampleRoutingModule {
}
