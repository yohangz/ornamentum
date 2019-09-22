import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SeoGuard } from '../../../core/seo.guard';

/**
 * Represent data table templating routes.
 */
const dataTableTemplatingRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'cell-template'
  },
  {
    loadChildren: './data-table-cell-template/data-table-cell-template.module#DataTableCellTemplateModule',
    // loadChildren: () => import('./data-table-cell-template/data-table-cell-template.module')
    //   .then((m) => m.DataTableCellTemplateModule),
    path: 'cell-template',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum - Data Table | Templating | Cell Template',
        // tslint:disable-next-line
        keywords: 'cell templating,cell templates,data grid cell templates,data table cell templates,table cell formatting,grid cell formatting',
        // tslint:disable-next-line
        description: 'Cell templating allows flexible customizations for the table cells changing styles, adding images, to rendering complex layouts.'
      }
    }
  },
  {
    loadChildren: './data-table-row-expand-template/data-table-row-expand-template.module#DataTableRowExpandTemplateModule',
    // loadChildren: () => import('./data-table-row-expand-template/data-table-row-expand-template.module')
    //   .then((m) => m.DataTableRowExpandTemplateModule),
    path: 'row-expand-template',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum - Data Table | Templating | Row Expand Template',
        // tslint:disable-next-line
        keywords: 'data grid row expand template,data grid row expansion,data grid row shrinking,data table row expand template,data table row expansion,data grid row shrinking,data grid record expansion,data table record expansion,collapse data grid row,collapse data table row',
        // tslint:disable-next-line
        description: 'Data tabl row expand template allows to provide additional details about a particular row of the table data, through expanding or collapsing its content.'
      }
    }
  },
  {
    loadChildren: './data-table-data-loading-template/data-table-data-loading-template.module#DataTableDataLoadingTemplateModule',
    // loadChildren: () => import('./data-table-data-loading-template/data-table-data-loading-template.module')
    //   .then((m) => m.DataTableDataLoadingTemplateModule),
    path: 'data-loading-template',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum - Data Table | Templating | Data Loading Template',
        // tslint:disable-next-line
        keywords: 'data Loading template,loading template,data loading template for grid,data loading template for table,data loading',
        // tslint:disable-next-line
        description: 'Loading spinner template allows to customize the appearance of data loading spinner as desired which is displayed while data loading or fetching to the data table.'
      }
    }
  },
  {
    loadChildren: './data-table-no-records-template/data-table-no-records-template.module#DataTableNoRecordsTemplateModule',
    // loadChildren: () => import('./data-table-no-records-template/data-table-no-records-template.module')
    //   .then((m) => m.DataTableNoRecordsTemplateModule),
    path: 'no-records-template',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum - Data Table | Templating | No Records Template',
        // tslint:disable-next-line
        keywords: 'no records template,null records template,no records for data table,no records for data grid,unavailability of data records,unavailability of data for grid,unavailability of data for table',
        // tslint:disable-next-line
        description: 'No Records Template allows to customize the appearance of the data table when there is no data available to be displayed.'
      }
    }
  }
];

/**
 * Data table templating routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableTemplatingRoutes)]
})
export class DataTableTemplatingRoutingModule {
}
