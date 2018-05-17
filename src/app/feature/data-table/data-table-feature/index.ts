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
  DataTableServerSideDataBindingComponent,
  DataTableClientSideDataBindingComponent,
  DataTableLoadingSpinnerComponent,
  DataTableEventsComponent,
  DataTableRowExpandTemplateComponent,
  DataTableCellTemplateComponent
} from './components';

import { DataStorageService } from './services/data-storage.service';

// Components
export const COMPONENTS = [
  DataTableFilteringComponent,
  DataTableServerSideDataBindingComponent,
  DataTableClientSideDataBindingComponent,
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
  DataTableLoadingSpinnerComponent,
  DataTableEventsComponent,
  DataTableCellTemplateComponent,
  DataTableRowExpandTemplateComponent
];

// Services
export const SERVICES = [
  DataStorageService
];
