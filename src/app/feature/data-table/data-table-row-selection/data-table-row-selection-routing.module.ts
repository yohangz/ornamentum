import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableRowSelectionComponent } from './index';

/**
 * Represent data table row selection routes.
 */
const dataTableRowSelectionRoutes: Routes = [
  {
    component: DataTableRowSelectionComponent,
    path: ''
  }
];

/**
 * Data table row selection routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableRowSelectionRoutes)]
})
export class DataTableRowSelectionRoutingModule {}
