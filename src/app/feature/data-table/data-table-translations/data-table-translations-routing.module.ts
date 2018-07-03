import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableTranslationsComponent } from './index';

/**
 * Represent data table translations routes.
 * @type Routes
 */
const dataTableTranslationsRoutes: Routes = [
  {
    component: DataTableTranslationsComponent,
    path: ''
  }
];

/**
 * Data table translations routing module.
 * @class DataTableTranslationsRoutingModule
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableTranslationsRoutes)]
})
export class DataTableTranslationsRoutingModule {
}
