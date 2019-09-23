import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SeoGuard } from '../../../core/seo.guard';

/**
 * Represent data table overview routes.
 */
const dataTableOverviewRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'basic-usage'
  },
  {
    loadChildren: './data-table-basic-usage/data-table-basic-usage.module#DataTableBasicUsageModule',
    // loadChildren: () => import('./data-table-basic-usage/data-table-basic-usage.module').then((m) => m.DataTableBasicUsageModule),
    path: 'basic-usage',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum - Data Table Basic Usage',
        keywords: 'ornamentum,data table,data grid,angular grids,angular tables,angular data grid,angular data tables',
        // tslint:disable-next-line
        description: 'Ornamentum data table component is a highly configurable lightweight Angular component which supports table view data representation. Ornamentum data table supports client/server/real-time data binding along with data filtering, sorting, grouping, pagination, selection, templating, state persistence, theming and much more.'
      }
    }
  }
];

/**
 * Data table overview routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableOverviewRoutes)]
})
export class DataTableOverviewRoutingModule {
}
