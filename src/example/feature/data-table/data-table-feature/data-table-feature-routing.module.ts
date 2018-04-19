import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  DataTableFilteringComponent,
  DataTableOverviewComponent,
  DataTableSortingComponent,
  DataTableResizableComponent
} from './components';

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
    component: DataTableFilteringComponent,
    path: 'filtering'
  },
  {
    component: DataTableSortingComponent,
    path: 'sorting'
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
    component: DataTableResizableComponent,
    path: 'resizable'
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
