import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  DataTableFilteringComponent,
  DataTableOverviewComponent,
  DataTableSortingComponent,
  DataTableResizableComponent,
  DataTablePagingComponent,
  DataTableTranslationsComponent,
  DataTableHeaderDetailsComponent,
  DataTablePersistDataComponent,
  DataTableSubstituteRowsComponent,
  DataTableLimitComponent,
  DataTableResponsiveConfComponent,
  DataTableDataBindingComponent,
  DataTableLoadingSpinnerComponent,
  DataTableEventsComponent,
  DataTableCellTemplateComponent,
  DataTableRowExpandTemplateComponent
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
    component: DataTableDataBindingComponent,
    path: 'data-binding'
  },
  {
    component: DataTablePagingComponent,
    path: 'paging'
  },
  {
    component: DataTableTranslationsComponent,
    path: 'translations'
  },
  {
    component: DataTableHeaderDetailsComponent,
    path: 'header-details'
  },
  {
    component: DataTablePersistDataComponent,
    path: 'data-persistence'
  },
  {
    component: DataTableLimitComponent,
    path: 'limit'
  },
  {
    component: DataTableSubstituteRowsComponent,
    path: 'substitute-rows'
  },
  {
    component: DataTableResponsiveConfComponent,
    path: 'responsive-configuration'
  },
  {
    // component: DataTableOverviewComponent,
    path: 'grouping'
  },
  {
    component: DataTableLoadingSpinnerComponent,
    path: 'loading-spinner'
  },
  {
    component: DataTableEventsComponent,
    path: 'events'
  },
  {
    component: DataTableFilteringComponent,
    path: 'column/filtering'
  },
  {
    component: DataTableSortingComponent,
    path: 'column/sorting'
  },
  {
    component: DataTableResizableComponent,
    path: 'column/resizable'
  },
  {
    component: DataTableCellTemplateComponent,
    path: 'templates/cell-template'
  },
  {
    component: DataTableRowExpandTemplateComponent,
    path: 'templates/expand-template'
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
