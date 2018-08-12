import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DataTableConfig } from './models/data-table-config.model';

import { DataTableColumnComponent } from './components/data-table-column/data-table-column.component';
import {
  DataTableColumnFilterHeaderComponent
} from './components/data-table-column-filter-header/data-table-column-filter-header.component';
import {
  DataTableColumnFilterTemplateComponent
} from './components/data-table-column-filter-template/data-table-column-filter-template.component';
import { DataTableColumnTitleHeaderComponent } from './components/data-table-column-title-header/data-table-column-title-header.component';
import { DataTableHeaderComponent } from './components/data-table-header/data-table-header.component';
import { DataTableColGroupComponent } from './components/data-table-col-group/data-table-col-group.component';
import { DataTablePaginationComponent } from './components/data-table-pagination/data-table-pagination.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { DataTableBodyComponent } from './components/data-table-body/data-table-body.component';
import { DataTableColumnSelectorComponent } from './components/data-table-column-selector/data-table-column-selector.component';
import { DataTableNoDataBodyComponent } from './components/data-table-no-data-body/data-table-no-data-body.component';
import { DataTableHeadComponent } from './components/data-table-head/data-table-head.component';
import { DataTableLoadingSpinnerComponent } from './components/data-table-loading-spinner/data-table-loading-spinner.component';

import { DATA_TABLE_CONFIG } from './services/data-table-config.service';

import { ScrollPositionDirective } from './directives/scroll-position.directive';
import { ScrollElementDirective } from './directives/scroll-element.directive';
import { ElementWidthDirective } from './directives/element-width.directive';

import { DropdownModule } from '../dropdown/dropdown.module';
import { UtilityModule } from '../utility/utility.module';

const COMPONENTS = [
  DataTableHeaderComponent,
  DataTableColumnComponent,
  DataTableColGroupComponent,
  DataTableBodyComponent,
  DataTablePaginationComponent,
  DataTableComponent,
  DataTableColumnSelectorComponent,
  DataTableNoDataBodyComponent,
  DataTableColumnFilterHeaderComponent,
  DataTableColumnFilterTemplateComponent,
  DataTableColumnTitleHeaderComponent,
  DataTableHeadComponent,
  DataTableLoadingSpinnerComponent
];

const DIRECTIVES = [
  ScrollPositionDirective,
  ScrollElementDirective,
  ElementWidthDirective
];

const PROVIDERS = [];

/**
 * Module representing grid component.
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UtilityModule.forRoot(),
    DropdownModule.forRoot()
  ],
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
  providers: [
    ...PROVIDERS
  ],
  exports: [
    DataTableColumnComponent,
    DataTableComponent
  ],
  entryComponents: [
    DataTableColumnSelectorComponent
  ]
})
export class DataTableModule {
  static forRoot(dataTableConfig?: DataTableConfig): ModuleWithProviders {
    return {
      ngModule: DataTableModule,
      providers: [
        {
          provide: DATA_TABLE_CONFIG,
          useValue: dataTableConfig
        }
      ]
    };
  }
}

// exports
export { DataTableCellBindEventArgs } from './models/data-table-cell-bind-event-args.model';
export { DataTableQueryResult } from './models/data-table-query-result.model';
export { DataTableFilterColumn } from './models/data-table-filter-column.model';
export { DataTableSortColumn } from './models/data-table-sort-column.model';
export { DataTableFilterOption } from './models/data-table-filter-option.model';
export { DataTableCellClickEventArgs } from './models/data-table-cell-click-event-args.model';
export { DataTableHeaderClickEventArgs } from './models/data-table-header-click-event-args.model';
export { DataTableDoubleClickEventArgs } from './models/data-table-double-click-event-args.model';
export { DataTableRowClickEventArgs } from './models/data-table-row-click-event-args.model';
export { DataTableScrollPoint } from './models/data-table-scroll-point.model';
export { DataTableRow } from './models/data-table-row.model';
export { DataTableRequestParams } from './models/data-table-request-params.model';
export { DataTableTranslations } from './models/data-table-translations.model';
export { DataTableDynamicRowSpanExtractorCallback } from './models/data-table-group-field-extractor-callback.model';
export { DataTableFilterValueExtractCallback } from './models/data-table-filter-value-extract-callback.model';
export { DataTableFilterFieldMapperCallback } from './models/data-table-filter-field-mapper-callback.model';
export { DataTableFilterExpressionCallback } from './models/data-table-filter-expression-callback.model';
export { DataTableCellColorRenderCallback } from './models/data-table-cell-color-render-callback.model';
export { DataTableSelectMode } from './models/data-table-select-mode.model';

export { DataTableSortOrder } from './models/data-table-sort-order.model';
export { DataTableStorageMode } from './models/data-table-storage-mode.model';
export { DataFetchMode } from './models/data-fetch-mode.enum';

export { DataTableComponent } from './components/data-table/data-table.component';
export { DataTableColumnComponent } from './components/data-table-column/data-table-column.component';
