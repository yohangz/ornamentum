import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SeoGuard } from '../../../core/seo.guard';

/**
 * Represent data table functionality routes.
 */
const dataTableFunctionalityRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'column/binding'
  },
  {
    loadChildren: './data-table-column-binding/data-table-column-binding.module#DataTableColumnBindingModule',
    // loadChildren: () => import('./data-table-column-binding/data-table-column-binding.module')
    //   .then((m) => m.DataTableColumnBindingModule),
    path: 'column/binding',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum - Data Table | Functionality | Column Binding',
        keywords: 'column binding,data table column binding,data grid column binding,grid column binding,table column binding',
        // tslint:disable-next-line
        description: 'Column binding allows the users to manipulate column associated bindings and behaviors.'
      }
    }
  },
  {
    loadChildren: './data-table-pagination/data-table-pagination.module#DataTablePaginationModule',
    // loadChildren: () => import('./data-table-pagination/data-table-pagination.module')
    //   .then((m) => m.DataTablePaginationModule),
    path: 'pagination',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum - Data Table | Functionality | Pagination',
        keywords: 'pagination,data paging,paginate,data table pagination,data grid pages',
        // tslint:disable-next-line
        description: 'Pagination allows the users to bind large data sets without a performance impact and avoid unnecessarily long scrollbars.'
      }
    }
  },
  {
    loadChildren: './data-table-sorting/data-table-sorting.module#DataTableSortingModule',
    // loadChildren: () => import('./data-table-sorting/data-table-sorting.module')
    //   .then((m) => m.DataTableSortingModule),
    path: 'column/sorting',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum - Data Table | Functionality | Sorting',
        keywords: 'sorting,sort records,sort data tables,sort data grids,sort data rows,ascending sort,descending sort,ordering data grids rows,ordering data tables rows',
        // tslint:disable-next-line
        description: 'Sorting  allows the users to order data on initial load and as well as by clicking on the sortable column headers to arrange the columns ascending or descending orders.'
      }
    }
  },
  {
    loadChildren: './data-table-filtering/data-table-filtering.module#DataTableFilteringModule',
    // loadChildren: () => import('./data-table-filtering/data-table-filtering.module')
    //   .then((m) => m.DataTableFilteringModule),
    path: 'column/filtering',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum - Data Table | Functionality | Filtering',
        keywords: 'filtering,filter data table records,filter data grid records,filter records,filter grid content,filter table content',
        // tslint:disable-next-line
        description: 'Filtering option facilitates the users to filter out data based on a specific criteria. Filtering would help the users to view and analyze data within a few seconds.'
      }
    }
  },
  {
    loadChildren: './data-table-row-selection/data-table-row-selection.module#DataTableRowSelectionModule',
    // loadChildren: () => import('./data-table-row-selection/data-table-row-selection.module')
    //   .then((m) => m.DataTableRowSelectionModule),
    path: 'row/selection',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum - Data Table | Functionality | Row | Selection',
        keywords: 'row selection,select rows,select multiple rows,select single row,toggle row selection,selection state track',
        // tslint:disable-next-line
        description: 'Row selection allows the users to select a single row or multiple rows in different methods such as single selection, multiple selection, single toggle selections.'
      }
    }
  },
];

/**
 * Data table functionality routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableFunctionalityRoutes)]
})
export class DataTableFunctionalityRoutingModule {
}
