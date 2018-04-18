import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableOverviewComponent } from './components/data-table-overview/data-table-overview.component';
import { DataTableFilteringComponent } from './components/data-table-filtering/data-table-filtering.component';

/**
 * Represent application data table feature module routes.
 * @type Routes
 */
const dataTableFeatureRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'overview'
  },
  {
    component: DataTableOverviewComponent,
    path: 'overview'
  },
  {
    component: DataTableOverviewComponent,
    path: 'data-binding'
  },
  {
    component: DataTableOverviewComponent,
    path: 'editing'
  },
  {
    component: DataTableFilteringComponent,
    path: 'filtering'
  },
  {
    component: DataTableOverviewComponent,
    path: 'grouping'
  },
  {
    component: DataTableOverviewComponent,
    path: 'paging'
  },
  {
    component: DataTableOverviewComponent,
    path: 'sorting'
  }
];

/**
 * Application data table feature routing module.
 * @class DataTableFeatureRoutingModule
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableFeatureRoutes)]
})
export class DataTableFeatureRoutingModule {
}
