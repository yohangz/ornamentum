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
        title: 'Ornamentum - Data Table | Functionality | Column | Resizing',
        // tslint:disable-next-line
        keywords: 'column resizing,dynamic column resizing,adjust column width,expand columns,shrink columns,data table column resizing,data grid column resizing',
        description: 'Column resizing functionality facilitates the users to manually resize the columns. '
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
        title: 'Ornamentum - Data Table | Functionality | Row | Span',
        keywords: 'rowspan,dynamic row span,row span,row grouping,rowspan,data grid rowspan,data table rowspan',
        description: 'Dynamic Row span can be used to render an complex data sets.'
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
