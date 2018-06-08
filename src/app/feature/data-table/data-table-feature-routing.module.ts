import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  DataTableFilteringComponent,
  DataTableOverviewComponent,
  DataTableColumnSortingComponent,
  DataTableRowGroupingComponent,
  DataTableResizableComponent,
  DataTablePaginationComponent,
  DataTableTranslationsComponent,
  DataTableHeaderDetailsComponent,
  DataTablePersistDataComponent,
  DataTableSubstituteRowsComponent,
  DataTableLimitComponent,
  DataTableResponsiveConfComponent,
  DataTableClientSideDataBindingComponent,
  DataTableServerSideDataBindingComponent,
  DataTableLoadingSpinnerComponent,
  DataTableCellTemplateComponent,
  DataTableRowExpandTemplateComponent,
  DataTableRealTimeDataBindingComponent,
  DataTableNoRecordsTemplateComponent,
  DataTableLoadingSpinnerTemplateComponent
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
    component: DataTableClientSideDataBindingComponent,
    path: 'client-side-data-binding'
  },
  {
    component: DataTableServerSideDataBindingComponent,
    path: 'server-side-data-binding'
  },
  {
    component: DataTableRealTimeDataBindingComponent,
    path: 'real-time-data-binding'
  },
  {
    component: DataTablePaginationComponent,
    path: 'pagination'
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
    component: DataTableLoadingSpinnerComponent,
    path: 'loading-spinner'
  },
  {
    component: DataTableRowGroupingComponent,
    path: 'grouping'
  },
  {
    path: 'row-selection'
  },
  {
    component: DataTableFilteringComponent,
    path: 'column/filtering'
  },
  {
    component: DataTableColumnSortingComponent,
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
  },
  {
    component: DataTableNoRecordsTemplateComponent,
    path: 'templates/no-records-template'
  },
  {
    component: DataTableLoadingSpinnerTemplateComponent,
    path: 'templates/loading-spinner-template'
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
