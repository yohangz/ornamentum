import {
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  QueryList,
  TemplateRef,
  AfterContentInit,
  forwardRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import get from 'lodash.get';

import { DataTableFilterValueExtractCallback } from '../../models/data-table-filter-value-extract-callback.model';
import { DataTableStorageMode } from '../../models/data-table-storage-mode.enum';
import { DataTableCellBindEventArgs } from '../../models/data-table-cell-bind-event-args.model';
import { DataTableCellClickEventArgs } from '../../models/data-table-cell-click-event-args.model';
import { DataTableHeaderClickEventArgs } from '../../models/data-table-header-click-event-args.model';
import { DataTableDoubleClickEventArgs } from '../../models/data-table-double-click-event-args.model';
import { DataTableRowClickEventArgs } from '../../models/data-table-row-click-event-args.model';
import { DataTableRow } from '../../models/data-table-row.model';
import { DataTableRequestParams } from '../../models/data-table-request-params.model';
import { DataTableTranslations } from '../../models/data-table-translations.model';
import { DataTableDynamicRowSpanExtractorCallback } from '../../models/data-table-group-field-extractor-callback.model';
import { DataTableQueryResult } from '../../models/data-table-query-result.model';
import { DataTableDataBindCallback } from '../../models/data-table-data-bind-callback.model';
import { DataTableFilterOption } from '../../models/data-table-filter-option.model';

import { DataTableColumnComponent } from '../data-table-column/data-table-column.component';

import { DragAndDropService, GlobalRefService } from '../../../utility';
import { DataTableEventStateService } from '../../services/data-table-event.service';
import { DataTableDataStateService } from '../../services/data-table-data-state.service';
import { DataTablePersistenceService } from '../../services/data-table-persistence.service';
import { DataTableConfigService } from '../../services/data-table-config.service';
import { DataTableScrollPositionService } from '../../services/data-table-scroll-position.service';
import { DataTableResourceService } from '../../services/data-table-resource.service';

/**
 * Data table component.
 */
@Component({
  selector: 'ng-data-table',
  styleUrls: ['./data-table.component.scss'],
  templateUrl: './data-table.component.html',
  providers: [
    DataTableConfigService,
    DataTableEventStateService,
    DataTablePersistenceService,
    DataTableDataStateService,
    DataTableScrollPositionService,
    DataTableResourceService,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DataTableComponent),
      multi: true
    }
  ]
})
export class DataTableComponent implements OnDestroy, AfterContentInit, ControlValueAccessor {
  private rowSelectChangeSubscription: Subscription;
  private dataFetchStreamSubscription: Subscription;

  @ContentChildren(DataTableColumnComponent)
  public columns: QueryList<DataTableColumnComponent>;

  @ContentChild('ngDataTableRowExpand')
  public rowExpandTemplate: TemplateRef<any>;

  /**
   * Template to display when data set is empty.
   * @type TemplateRef
   */
  @ContentChild('ngDataTableNoRecords')
  public noRecordsTemplate: TemplateRef<any>;

  @ContentChild('ngDataTableLoadingSpinner')
  public loadingSpinnerTemplate: TemplateRef<any>;

  @ContentChild('ngDataTableRowExpandLoadingSpinner')
  public rowExpandLoadingSpinnerTemplate: TemplateRef<any>;

  // Event handlers

  /**
   * On data table initStream event handler.
   * @type {EventEmitter<DataTableComponent>}
   */
  @Output()
  public init: EventEmitter<DataTableComponent>;

  /**
   * On row selected state change event handler.
   * @type {EventEmitter<any>}
   */
  @Output()
  public rowSelectChange: EventEmitter<any | any[]>;

  /**
   * On row click event handler.
   * @type {EventEmitter<any>}
   */
  @Output()
  public rowClick: EventEmitter<DataTableRowClickEventArgs>;

  /**
   * On row double click event handler.
   * @type {EventEmitter<any>}
   */
  @Output()
  public rowDoubleClick: EventEmitter<DataTableDoubleClickEventArgs>;

  /**
   * On header click event handler.
   * @type {EventEmitter<any>}
   */
  @Output()
  public headerClick: EventEmitter<DataTableHeaderClickEventArgs>;

  @Output()
  public allRowSelectChange: EventEmitter<boolean>;

  /**
   * On cell click event handler.
   * @type {EventEmitter<any>}
   */
  @Output()
  public cellClick: EventEmitter<DataTableCellClickEventArgs>;

  @Output()
  public dataBound: EventEmitter<void>;

  /**ss
   * On row bind event handler.
   * @type {EventEmitter<DataTableRow>}
   */
  @Output()
  public rowBind: EventEmitter<DataTableRow>;

  /**
   * On cell bind event handler.
   * @type {EventEmitter<DataTableCellBindEventArgs>}
   */
  @Output()
  public cellBind: EventEmitter<DataTableCellBindEventArgs>;

  // Input Events

  /**
   * On data load event handler.
   * Fired on each data fetch request. But not on hard reload.
   * @type {EventEmitter<DataTableRequestParams>}
   */
  @Input()
  public set onDataBind(value: DataTableDataBindCallback) {
    this.dataStateService.onDataBind = value;
  }

  /**
   * On filter value extract event handler callback.
   * @type {DataTableFilterValueExtractCallback}
   */
  @Input()
  public set onFilterValueExtract(value: DataTableFilterValueExtractCallback) {
    this.dataStateService.onFilterValueExtract = value;
  }

  /**
   * On dynamic row span extract event handler callback.
   * @type {DataTableDynamicRowSpanExtractorCallback}
   */
  @Input()
  public set onDynamicRowSpanExtract(value: DataTableDynamicRowSpanExtractorCallback) {
    this.dataStateService.onDynamicRowSpanExtract = value;
  }

  // Input parameters

  @Input()
  public set dataSource(source: Observable<any[]>) {
    this.initDataSource(source);
  }

  /**
   * Data table identifier. Required if persist table state is enabled.
   */
  @Input()
  public id: string;

  /**
   * Persist table state if true.
   * @type {boolean}
   */
  @Input()
  public set persistTableState(value: boolean) {
    this.config.persistTableState = value;
  }

  /**
   * Storage more to persist table state.
   */
  @Input()
  public set storageMode(value: DataTableStorageMode) {
    this.dataTableStateService.storageMode = value;
  }

  /**
   * Enable multi column sorting support if true.
   * @type {boolean}
   */
  @Input()
  public set multiColumnSortable(value: boolean) {
    this.config.multiColumnSortable = value;
  }

  /**
   * Show header if true.
   * @type {boolean}
   */
  @Input()
  public set showHeader(value: boolean) {
    this.config.showHeader = value;
  }

  /**
   * Header title text.
   * @type {string}
   */
  @Input()
  public set title(value: string) {
    this.config.title = value;
  }

  @Input()
  public set width(value: string | number) {
    this.config.width = value;
  }

  /**
   * Table min height
   * Used to set overlay height when not pageable.
   * @type {string|number}
   */
  @Input()
  public set minHeight(value: string | number) {
    this.config.minHeight = value;
  }

  /**
   * Table min width.
   * Used to set min width of the table. Useful to build a mobile responsive grid without scattering data.
   * @type {string|number}
   */
  @Input()
  public set minWidth(value: string | number) {
    this.config.minWidth = value;
  }

  /**
   * Height of the table content.
   * This will enable vertical scrolling.
   * @type {string|number}
   */
  @Input()
  public set contentHeight(value: string | number) {
    this.config.contentHeight = value;
  }

  /**
   * Pageable if true.
   * @type {boolean}
   */
  @Input()
  public set pageable(value: boolean) {
    this.config.pageable = value;
  }

  /**
   * Show auto generated index counter column.
   * @type {boolean}
   */
  @Input()
  public set showIndexColumn(value: boolean) {
    this.config.showIndexColumn = value;
  }

  /**
   * Index column title text.
   * @type {string}
   */
  @Input()
  public set indexColumnTitle(value: string) {
    this.config.indexColumnTitle = value;
  }

  /**
   * Row selectable if true (Show row select checkbox).
   * @type {rowSelectable}
   */
  @Input()
  public set rowSelectable(value: boolean) {
    this.config.rowSelectable = value;
  }

  /**
   * Multi row selectable if true.
   * @type {boolean}
   */
  @Input()
  public set multiRowSelectable(value: boolean) {
    this.config.multiRowSelectable = value;
  }

  @Input()
  public set showRowSelectCheckbox(value: boolean) {
    this.config.showRowSelectCheckbox = value;
  }

  @Input()
  public set showRowSelectAllCheckbox(value: boolean) {
    this.config.showRowSelectAllCheckbox = value;
  }

  /**
   * Show substitute rows (Only applicable when paging is enabled).
   * @type {boolean}
   */
  @Input()
  public set showSubstituteRows(value: boolean) {
    this.config.showSubstituteRows = value;
  }

  /**
   * Enable expandable rows.
   * @type {boolean}
   */
  @Input()
  public set expandableRows(value: boolean) {
    this.config.expandableRows = value;
  }

  /**
   * Select checkbox on row click.
   * @type {boolean}
   */
  @Input()
  public set selectOnRowClick(value: boolean) {
    this.config.selectOnRowClick = value;
  }

  /**
   * Expand table on row click.
   * @type {boolean}
   */
  @Input()
  public set expandOnRowClick(value: boolean) {
    this.config.expandOnRowClick = value;
  }

  /**
   * Auto dataBindStream on initStream.
   * @type {boolean}
   */
  @Input()
  public set autoFetch(value: boolean) {
    this.config.autoFetch = value;
  }

  /**
   * Show loading spinner.
   * @type {boolean}
   */
  @Input()
  public set showLoadingSpinner(value: boolean) {
    this.config.showLoadingSpinner = value;
  }

  /**
   * Select tracked by (identifier from table data to track selected items uniquely)
   * @type {string}
   */
  @Input()
  public set selectTrackBy(value: string) {
    this.config.selectTrackBy = value;
  }

  /**
   * Selected row (effective when multiRowSelectable false).
   * @type {any}
   */
  @Input()
  public set selectedRow(value: any) {
    this.dataStateService.selectedRow = value;
    this.eventStateService.rowSelectChangeStream.emit(this.dataStateService.selectedRow);
  }

  /**
   * Selected rows (effective when multiRowSelectable true).
   * @type {Array}
   */
  @Input()
  public set selectedRows(value: any[]) {
    this.dataStateService.selectedRows = value;
    this.eventStateService.rowSelectChangeStream.emit(this.dataStateService.selectedRows);
  }

  /**
   * Filter de-bounce time milliseconds.
   * @type {number}
   */
  @Input()
  public set filterDebounceTime(value: number) {
    this.config.filterDebounceTime = value;
  }

  /**
   * Filter de-bounce enabled state.
   * @type {boolean}
   */
  @Input()
  public set filterDebounce(value: boolean) {
    this.config.filterDebounce = value;
  }

  /**
   * Show refresh button.
   * @type {boolean}
   */
  @Input()
  public set showRefreshButton(value: boolean) {
    this.config.showRefreshButton = value;
  }

  /**
   * Show column selector.
   * @type {boolean}
   */
  @Input()
  public set showColumnSelector(value: boolean) {
    this.config.showColumnSelector = value;
  }

  /**
   * Sets width for expander column.
   * @type {number | string}
   */
  @Input()
  public set expanderColumnWidth(value: number | string) {
    this.config.expanderColumnWidth = value;
  }

  /**
   * Sets width for index column.
   * @type {string | number}
   */
  @Input()
  public set indexColumnWidth(value: number | string) {
    this.config.indexColumnWidth = value;
  }

  /**
   * Sets width for selection column.
   * @type {string | number}
   */
  @Input()
  public set selectionColumnWidth(value: number | string) {
    this.config.selectionColumnWidth = value;
  }

  /**
   * Relative parent element. Grid positioning relative to this element.
   * @type {HTMLElement}
   */
  @Input()
  public set relativeParentElement(value: HTMLElement) {
    this.config.relativeParentElement = value;
  }

  /**
   * Data table display text key translations.
   * @type {DataTableTranslations}
   * @param {DataTableTranslations} data
   */
  @Input()
  public set translations(data: DataTableTranslations) {
    this.config.translations = data;
  }

  /**
   * Set show row expand loading spinner state.
   * @param {boolean} value Show row expand loading spinner if true.
   */
  @Input()
  public set showRowExpandLoadingSpinner(value: boolean) {
    this.config.showRowExpandLoadingSpinner = value;
  }

  /**
   * Set offset.
   * @param value
   */
  @Input()
  public set offset(value: number) {
    this.config.offset = value;
    this.eventStateService.dataFetchStream.next(false);
  }

  /**
   * Set page item limit
   * @param value
   */
  @Input()
  public set limit(value: number) {
    this.config.limit = value;
    this.eventStateService.dataFetchStream.next(false);
  }

  /**
   * Set page number.
   * @param value
   */
  @Input()
  public set page(value: number) {
    this.offset = (value - 1) * this.config.limit;
  }

  /**
   * Get page number.
   * @return {number}
   */
  public get page(): number {
    return Math.floor(this.config.offset / this.config.limit) + 1;
  }

  public get headerPadding(): number {
    return this.config.contentHeight ? this.globalRefService.scrollbarWidth : 0;
  }

  /**
   * Get loading status.
   * @return {boolean} True if loading.
   */
  public get isLoading(): boolean {
    return this.config.showLoadingSpinner && this.dataStateService.dataLoading;
  }

  constructor(private dragAndDropService: DragAndDropService,
              private dataTableStateService: DataTablePersistenceService,
              private globalRefService: GlobalRefService,
              private eventStateService: DataTableEventStateService,
              private dataTableResourceService: DataTableResourceService<any>,
              public dataStateService: DataTableDataStateService,
              public config: DataTableConfigService) {
    this.storageMode = config.storageMode;

    this.headerClick = this.eventStateService.headerClickStream;
    this.allRowSelectChange = this.eventStateService.allRowSelectChangeStream;
    this.rowBind = this.eventStateService.rowBindStream;
    this.rowClick = this.eventStateService.rowClickStream;
    this.rowDoubleClick = this.eventStateService.rowDoubleClickStream;
    this.rowSelectChange = this.eventStateService.rowSelectChangeStream;
    this.cellBind = this.eventStateService.cellBindStream;
    this.cellClick = this.eventStateService.cellClickStream;
    this.init = this.eventStateService.initStream;
    this.dataBound = this.eventStateService.dataBoundStream;
  }

  /**
   * On after data bind handler.
   */
  private onAfterDataBind(queryResult: DataTableQueryResult<any>): void {
    this.dataStateService.itemCount = queryResult.count;
    this.setDataRows(queryResult.items);

    if (this.config.offset > this.dataStateService.itemCount) {
      this.config.offset = 0;
    }

    if (this.dataStateService.heardReload) {
      this.eventStateService.fetchFilterOptionsStream.emit();
      this.dataStateService.heardReload = false;
    }

    this.dataStateService.dataLoading = false;
    this.eventStateService.dataBoundStream.emit();
  }

  private getSelectedState(item: any): boolean {
    const id = get(item, this.config.selectTrackBy);
    if (id === undefined) {
      return false;
    }

    if (this.config.multiRowSelectable) {
      return this.dataStateService.selectedRows.indexOf(id) > -1;
    }

    return this.dataStateService.selectedRow === id;
  }

  /**
   * Get data item representing objects.
   * @return {DataTableRow[]} Data rows.
   */
  private setDataRows(items: any[]): void {
    this.dataStateService.dataRows = items.map((item: any, index: number) => {
      return {
        dataLoaded: false,
        expanded: false,
        disabled: false,
        colour: '',
        cssClass: '',
        tooltip: '',
        index: index,
        item: item,
        selected: this.getSelectedState(item)
      };
    });

    if (this.config.multiRowSelectable) {
      this.dataStateService.allRowSelected = this.dataStateService.dataRows.length !== 0
        && this.dataStateService.dataRows.every((dataRow: DataTableRow) => {
          return dataRow.selected;
        });
    }

    const substituteRowCount = this.config.limit - this.dataStateService.dataRows.length;
    this.dataStateService.substituteRows = Array.from({length: substituteRowCount});
  }

  private initDataFetchEvent(): void {
    this.dataFetchStreamSubscription = this.eventStateService.dataFetchStream
      .debounceTime(20)
      .switchMap((reload: boolean) => this.mapDataBind(reload))
      .subscribe((queryResult: DataTableQueryResult<any>) => {
        this.onAfterDataBind(queryResult);
      });
  }

  /**
   * Trigger table data bind.
   * @param {boolean} hardReload Hard refresh if true.
   */
  private mapDataBind(hardReload: boolean): Observable<DataTableQueryResult<any>> {
    this.dataStateService.dataLoading = true;
    if (hardReload) {
      this.clearRowSelectState();
      this.clearColumnState();
      this.dataStateService.heardReload = true;
      this.config.offset = 0;
    }

    const params: DataTableRequestParams = {
      hardReload: hardReload
    };

    if (this.columns) {
      params.sortColumns = this.columns.filter(column => column.sortable)
        .map((column: DataTableColumnComponent) => {
          return {
            field: column.sortField || column.field,
            sortOrder: column.sortOrder,
          };
        });

      params.filterColumns = this.columns.filter(column => column.filterable)
        .map((column: DataTableColumnComponent) => {
          return {
            field: column.filterField || column.field,
            filterValue: column.filter,
            filterExpression: column.filterExpression,
            showDropdownFilter: column.showDropdownFilter
          };
        });
    }

    if (this.config.pageable) {
      params.offset = this.config.offset;
      params.limit = this.config.limit;
    }

    if (this.config.persistTableState) {
      this.dataTableStateService.setState(this.id, params);
    }

    return this.dataStateService.onDataBind(params);
  }

  private initDataTableState(): void {
    if (this.config.persistTableState) {
      const dataTableState = this.dataTableStateService.getState(this.id);
      if (dataTableState) {
        this.columns.forEach((column) => {
          const filterColumn = dataTableState.filterColumns.find((col) => {
            return col.field === column.field;
          });

          const sortColumn = dataTableState.sortColumns.find((col) => {
            return col.field === column.field;
          });

          if (filterColumn) {
            column.filter = filterColumn.filterValue;
          }

          if (sortColumn) {
            column.sortOrder = sortColumn.sortOrder;
          }
        });

        this.config.limit = dataTableState.limit;
        this.config.offset = dataTableState.offset;
      }
    }
  }

  public ngAfterContentInit(): void {
    this.initDataTableState();
    this.initDataFetchEvent();

    if (this.config.autoFetch) {
      this.eventStateService.dataFetchStream.next(false);
    }

    // remove this
    setTimeout(() => {
      this.eventStateService.fetchFilterOptionsStream.emit();
    }, 0);

    this.eventStateService.initStream.emit(this);
  }

  /**
   * Lifecycle hook that is called when a directive, pipe or service is destroyed.
   */
  public ngOnDestroy(): void {
    if (this.dataFetchStreamSubscription) {
      this.dataFetchStreamSubscription.unsubscribe();
    }

    if (this.rowSelectChangeSubscription) {
      this.rowSelectChangeSubscription.unsubscribe();
    }

    this.dataTableResourceService.dispose();
  }

  /**
   * Reset column sort state.
   */
  private clearColumnState(): void {
    this.columns.forEach((column: DataTableColumnComponent) => {
      column.resetSortOrder();
      column.filter = undefined;
    });
  }

  private clearRowSelectState(): void {
    this.dataStateService.selectedRow = undefined;
    this.dataStateService.selectedRows = [];
    this.dataStateService.allRowSelected = false;
  }

  public fetchData(hardRefresh: boolean = false): void {
    this.eventStateService.dataFetchStream.next(hardRefresh);
  }

  public initDataSource(source: Observable<any>): void {
    this.dataTableResourceService.setDataSource(source);

    this.onDataBind = (params: DataTableRequestParams): Observable<DataTableQueryResult<any>> => {
      if (params.hardReload) {
        this.dataTableResourceService.setDataSource(source);
      }

      return this.dataTableResourceService.query(params);
    };

    this.onFilterValueExtract = (column: DataTableColumnComponent): Observable<DataTableFilterOption[]> => {
      return this.dataTableResourceService.extractFilterOptions(column);
    };
  }

  public writeValue(value: any): void {
    if (!value) {
      return;
    }

    if (this.config.multiRowSelectable) {
      this.selectedRows = value;
    } else {
      this.selectedRow = value;
    }
  }

  public registerOnChange(onSelectChange: (value: any) => void): void {
    this.rowSelectChangeSubscription = this.eventStateService.rowSelectChangeStream
      .subscribe((selectedIds: any | any[]) => {
        onSelectChange(selectedIds);
      });
  }

  public registerOnTouched(fn: any): void {
  }
}
