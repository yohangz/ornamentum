import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableTranslationsComponent } from './index';

/**
 * Represent data table translations routes.
 */
const dataTableTranslationsRoutes: Routes = [
  {
    component: DataTableTranslationsComponent,
    path: ''
  }
];

/**
 * Data table translations routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableTranslationsRoutes)]
})
export class DataTableTranslationsRoutingModule {
}
