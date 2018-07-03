import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableLoadingSpinnerTemplateComponent } from './index';

/**
 * Represent data table loading spinner template routes.
 * @type Routes
 */
const dataTableLoadingSpinnerTemplateRoutes: Routes = [
  {
    component: DataTableLoadingSpinnerTemplateComponent,
    path: ''
  }
];

/**
 * Data table loading spinner template routing module.
 * @class DataTableLoadingSpinnerTemplateRoutingModule
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableLoadingSpinnerTemplateRoutes)]
})
export class DataTableLoadingSpinnerTemplateRoutingModule {
}
