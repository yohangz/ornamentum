import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableConfigOverridingComponent } from './index';

/**
 * Represent data table config overriding data binding routes.
 */
const dataTableConfigOverridingRoutes: Routes = [
  {
    component: DataTableConfigOverridingComponent,
    path: ''
  }
];

/**
 * Data table config overriding data binding routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableConfigOverridingRoutes)]
})
export class DataTableConfigOverridingRoutingModule {
}
