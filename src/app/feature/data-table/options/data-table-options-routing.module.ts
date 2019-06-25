import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SeoGuard } from '../../../core/seo.guard';

/**
 * Represent data table options routes.
 */
const dataTableOptionsRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'data-loading-spinner'
  },
  {
    loadChildren: () => import('./data-table-data-loading-spinner/data-table-data-loading-spinner.module')
      .then((m) => m.DataTableDataLoadingSpinnerModule),
    path: 'data-loading-spinner',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Functionality | Data Loading Spinner',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: () => import('./data-table-substitute-rows/data-table-substitute-rows.module')
      .then((m) => m.DataTableSubstituteRowsModule),
    path: 'substitute-rows',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Functionality | Substitute Rows',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: () => import('./data-table-header-details/data-table-header-details.module')
      .then((m) => m.DataTableHeaderDetailsModule),
    path: 'header-details',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Functionality | Header Details',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  }
];

/**
 * Data table options routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableOptionsRoutes)]
})
export class DataTableOptionsRoutingModule {
}
