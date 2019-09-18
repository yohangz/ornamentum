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
        title: 'Ornamentum | Data Table | Templating | Cell Template',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
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
        title: 'Ornamentum | Data Table | Templating | Row Expand Template',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
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
        title: 'Ornamentum | Data Table | Templating | Data Loading Template',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
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
        title: 'Ornamentum | Data Table | Templating | No Records Template',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
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
