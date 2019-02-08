import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableCustomThemingComponent } from './index';

/**
 * Represent data table custom theming routes.
 */
const dataTableCustomThemingRoutes: Routes = [
  {
    component: DataTableCustomThemingComponent,
    path: ''
  }
];

/**
 * Data table custom theming routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableCustomThemingRoutes)]
})
export class DataTableCustomThemingRoutingModule {
}
