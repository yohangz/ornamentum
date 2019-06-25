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
    loadChildren: () => import('./data-table-cell-template/data-table-cell-template.module')
      .then((m) => m.DataTableCellTemplateModule),
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
    loadChildren: () => import('./data-table-row-expand-template/data-table-row-expand-template.module')
      .then((m) => m.DataTableRowExpandTemplateModule),
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
    loadChildren: () => import('./data-table-loading-spinner-template/data-table-loading-spinner-template.module')
      .then((m) => m.DataTableLoadingSpinnerTemplateModule),
    path: 'loading-spinner-template',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Templating | Loading Spinner Template',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: () => import('./data-table-no-records-template/data-table-no-records-template.module')
      .then((m) => m.DataTableNoRecordsTemplateModule),
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
