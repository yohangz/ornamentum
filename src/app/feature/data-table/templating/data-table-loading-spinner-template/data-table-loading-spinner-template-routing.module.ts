import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableLoadingSpinnerTemplateComponent } from './index';

/**
 * Represent data table loading spinner template routes.
 */
const dataTableLoadingSpinnerTemplateRoutes: Routes = [
  {
    component: DataTableLoadingSpinnerTemplateComponent,
    path: ''
  }
];

/**
 * Data table loading spinner template routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableLoadingSpinnerTemplateRoutes)]
})
export class DataTableLoadingSpinnerTemplateRoutingModule {
}
