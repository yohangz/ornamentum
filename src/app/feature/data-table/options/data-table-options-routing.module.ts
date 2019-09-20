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
    loadChildren: './data-table-data-loading-spinner/data-table-data-loading-spinner.module#DataTableDataLoadingSpinnerModule',
    // loadChildren: () => import('./data-table-data-loading-spinner/data-table-data-loading-spinner.module')
    //   .then((m) => m.DataTableDataLoadingSpinnerModule),
    path: 'data-loading-spinner',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Functionality | Data Loading Spinner',
        // tslint:disable-next-line
        keywords: 'data loading spinner,loading indicator,loading spinner,data loading spinner for grid,data loading spinner for table',
        // tslint:disable-next-line
        description: 'Data Loading Spinner can be used to visual indicate the data fetch operation is in-progress.'
      }
    }
  },
  {
    loadChildren: './data-table-substitute-rows/data-table-substitute-rows.module#DataTableSubstituteRowsModule',
    // loadChildren: () => import('./data-table-substitute-rows/data-table-substitute-rows.module')
    //   .then((m) => m.DataTableSubstituteRowsModule),
    path: 'substitute-rows',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Functionality | Substitute Rows',
        // tslint:disable-next-line
        keywords: 'substitute rows,alternative rows,fillup rows,null rows,empty rows,empty records,null records,dummy rows',
        // tslint:disable-next-line
        description: 'Substitute rows are used to show empty rows when there is a lesser amount of data is available than the declared limit.'
      }
    }
  },
  {
    loadChildren: './data-table-header-details/data-table-header-details.module#DataTableHeaderDetailsModule',
    // loadChildren: () => import('./data-table-header-details/data-table-header-details.module')
    //   .then((m) => m.DataTableHeaderDetailsModule),
    path: 'header-details',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Functionality | Header Details',
        // tslint:disable-next-line
        keywords: 'header details,header,header details for data grid,header details for data table,grid header,table header',
        // tslint:disable-next-line
        description: 'Header details are fully configurable to enable/disable displaying refresh button, column selector and table title.'
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
