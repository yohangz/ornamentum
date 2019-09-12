import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SeoGuard } from '../../../core/seo.guard';

/**
 * Represent data table experimental routes.
 */
const dataTableExperimentalRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'column/resizing'
  },
  {
    loadChildren: './data-table-column-resizing/data-table-column-resizing.module#DataTableColumnResizingModule',
    // loadChildren: () => import('./data-table-column-resizing/data-table-column-resizing.module')
    //   .then((m) => m.DataTableColumnResizingModule),
    path: 'column/resizing',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Functionality | Column | Resizing',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: './data-table-dynamic-row-span/data-table-dynamic-row-span.module#DataTableDynamicRowSpanModule',
    // loadChildren: () => import('./data-table-dynamic-row-span/data-table-dynamic-row-span.module')
    //   .then((m) => m.DataTableDynamicRowSpanModule),
    path: 'row/span',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Functionality | Row | Span',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  }
];

/**
 * Data table experimental routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableExperimentalRoutes)]
})
export class DataTableExperimentalRoutingModule {
}
