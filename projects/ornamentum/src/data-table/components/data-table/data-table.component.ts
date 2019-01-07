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
  forwardRef,
  ElementRef,
  ViewChild
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Subscription, Observable } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';

import get from 'lodash-es/get';

import { DataTableFilterValueExtractCallback } from '../../models/data-table-filter-value-extract-callback.model';
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

import { DataTableSelectMode } from '../../models/data-table-select-mode.model';
import { DataTableStorageMode } from '../../models/data-table-storage-mode.model';
import { DataFetchMode } from '../../models/data-fetch-mode.enum';

import { DataTableColumnComponent } from '../data-table-column/data-table-column.component';

import { DragAndDropService, GlobalRefService } from '../../../utility/utility.module';
import { DataTableEventStateService } from '../../services/data-table-event.service';
import { DataTableDataStateService } from '../../services/data-table-data-state.service';
import { DataTablePersistenceService } from '../../services/data-table-persistence.service';
import { DataTableConfigService } from '../../services/data-table-config.service';
import { DataTableScrollPositionService } from '../../services/data-table-scroll-position.service';
import { DataTableResourceService } from '../../services/data-table-resource.service';

/**
 * Data table component
 */
@Component({
  selector: 'ng-data-table',
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

  /**
   * Data table column collection
   * @type {QueryList<DataTableColumnComponent>}
   */
  @ContentChildren(DataTableColumnComponent)
  public columns: QueryList<DataTableColumnComponent>;

  /**
   * Template to display when data row ex expanded for detail view
   * @type {TemplateRef}
   */
  @ContentChild('ngDataTableRowExpand')
  public rowExpandTemplate: TemplateRef<any>;

  /**
   * Template to display when data set is empty
   * @type {TemplateRef}
   */
  @ContentChild('ngDataTableNoRecords')
  public noRecordsTemplate: TemplateRef<any>;

  /**
   * Template to display while loading data
   * @type {TemplateRef}
   */
  @ContentChild('ngDataTableLoadingSpinner')
  public loadingSpinnerTemplate: TemplateRef<any>;

  /**
   * Template to display while row is expanding to load detail view
   * @type {TemplateRef}
   */
  @ContentChild('ngDataTableRowExpandLoadingSpinner')
  public rowExpandLoadingSpinnerTemplate: TemplateRef<any>;

  /**
   * Raw data table element reference
   * @type {ElementRef}
   */
  @ViewChild('dataTableElement')
  public dataTableElement: ElementRef<HTMLDivElement>;

  // Event handlers

  /**
   * On data table initStream event handler
   * @type {EventEmitter<DataTableComponent>}
   */
  @Output()
  public init: EventEmitter<DataTableComponent>;

  /**
   * On row selected state change event handler
   * @type {EventEmitter<any>}
   */
  @Output()
  public rowSelectChange: EventEmitter<any | any[]>;

  /**
   * On row click event handler
   * @type {EventEmitter<any>}
   */
  @Output()
  public rowClick: EventEmitter<DataTableRowClickEventArgs<any>>;

  /**
   * On row double click event handler
   * @type {EventEmitter<any>}
   */
  @Output()
  public rowDoubleClick: EventEmitter<DataTableDoubleClickEventArgs<any>>;

  /**
   * On header click event handler
   * @type {EventEmitter<DataTableHeaderClickEventArgs>}
   */
  @Output()
  public headerClick: EventEmitter<DataTableHeaderClickEventArgs>;

  /**
   * On all row select change event handler
   * @type {EventEmitter<boolean>}
   */
  @Output()
  public allRowSelectChange: EventEmitter<boolean>;

  /**
   * On cell click event handler
   * @type {EventEmitter<any>}
   */
  @Output()
  public cellClick: EventEmitter<DataTableCellClickEventArgs<any>>;

  /**
   * Data bound event handler
   * @type {EventEmitter<any>}
   */
  @Output()
  public dataBound: EventEmitter<void>;

  /**
   * On row bind event handler
   * @type {EventEmitter<DataTableRow>}
   */
  @Output()
  public rowBind: EventEmitter<DataTableRow<any>>;

  /**
   * On column bind event handler
   * @type {EventEmitter<DataTableColumnComponent>}
   */
  @Output()
  public columnBind: EventEmitter<DataTableColumnComponent>;

  /**
   * On cell bind event handler
   * @type {EventEmitter<DataTableCellBindEventArgs>}
   */
  @Output()
  public cellBind: EventEmitter<DataTableCellBindEventArgs<any>>;

  // Input Events

  /**
   * Set on data load event handler; this handler is fired on each data fetch request but not on hard reload
   * @param value Data bind callback function reference
   */
  @Input()
  public set onDataBind(value: DataTableDataBindCallback) {
    this.dataStateService.onDataBind = value;
  }

  /**
   * Set on filter value extract event handler callback
   * @param value Data table filter value callback function reference
   */
  @Input()
  public set onFilterValueExtract(value: DataTableFilterValueExtractCallback) {
    this.dataStateService.onFilterValueExtract = value;
  }

  /**
   * Set on dynamic row span extract event handler callback
   * @param value Data table dynamic row extractor callback function reference
   */
  @Input()
  public set onDynamicRowSpanExtract(value: DataTableDynamicRowSpanExtractorCallback<any>) {
    this.dataStateService.onDynamicRowSpanExtract = value;
  }

  // Input parameters

  /**
   * Set static data item collection
   * @param value Any array of objects containing table data
   */
  @Input()
  public set items(value: any[]) {
    if (!value) {
      return;
    }

    this.eventStateService.staticDataSourceStream.next(value);
  }

  /**
   * Set data source observable; Source will be subscribed by grid to get data stream
   * @param source Any object collecting of observable
   */
  @Input()
  public set dataSource(source: Observable<any[]>) {
    this.initDataSource(source);
  }

  /**
   * Set data table identifier; Required if persist table state is enabled
   * @type {string}
   */
  @Input()
  public id: string;

  /**
   * Set persist state; Persist table state if true
   * @param value Persistent state
   */
  @Input()
  public set persistTableState(value: boolean) {
    this.config.persistTableState = value;
  }

  /**
   * Set storage mode; Storage mode to persist table state
   * @param value Data storage mode
   */
  @Input()
  public set storageMode(value: DataTableStorageMode) {
    this.dataTableStateService.storageMode = value;
  }

  /**
   * Set multi column sortable state; Enable multi column sorting support if true
   * @param value Multi column enabled state
   */
  @Input()
  public set multiColumnSortable(value: boolean) {
    this.config.multiColumnSortable = value;
  }

  /**
   * Set show header state; display header if true
   * @param value Show header state
   */
  @Input()
  public set showHeader(value: boolean) {
    this.config.showHeader = value;
  }

  /**
   * Set header title text
   * @param value Header title
   */
  @Input()
  public set title(value: string) {
    this.config.title = value;
  }

  /**
   * Set data table width
   * @param value Width value in pixels
   */
  @Input()
  public set width(value: string | number) {
    this.config.width = value;
  }

  /**
   * Set table min height; Used to set overlay height when not pageable
   * @param value Table min height in pixels
   */
  @Input()
  public set minHeight(value: string | number) {
    this.config.minHeight = value;
  }

  /**
   * Set table min width; Useful to build a mobile responsive grid without scattering data
   * @param value Table min width in pixels
   */
  @Input()
  public set minWidth(value: string | number) {
    this.config.minWidth = value;
  }

  /**
   * Set height of the table content; This will enable vertical scrolling
   * @param value Table content height in pixels
   */
  @Input()
  public set contentHeight(value: string | number) {
    this.config.contentHeight = value;
  }

  /**
   * Set pageable state; Show pagination if true
   * @param value Pageable state
   */
  @Input()
  public set pageable(value: boolean) {
    this.config.pageable = value;
  }

  /**
   * Set show index column state; Show auto generated index counter column if true
   * @param value Show index column state
   */
  @Input()
  public set showIndexColumn(value: boolean) {
    this.config.showIndexColumn = value;
  }

  /**
   * Set index column title; Index column title text
   * @param value Index column title
   */
  @Input()
  public set indexColumnTitle(value: string) {
    this.config.indexColumnTitle = value;
  }

  /**
   * Set row selectable state; Row selectable if true (Show row select checkbox).
   * @param value Row selectable state
   */
  @Input()
  public set rowSelectable(value: boolean) {
    this.config.rowSelectable = value;
  }

  /**
   * Set row select mode
   * @param value Row select mode
   */
  @Input()
  public set selectMode(value: DataTableSelectMode) {
    this.config.selectMode = value;
  }

  /**
   * Set display row select checkbox status; display row select checkbox if true
   * @param value Show row select checkbox status
   */
  @Input()
  public set showRowSelectCheckbox(value: boolean) {
    this.config.showRowSelectCheckbox = value;
  }

  /**
   * Set all row select checkbox status; display all row select checkbox if true
   * @param value Show all row select checkbox status
   */
  @Input()
  public set showRowSelectAllCheckbox(value: boolean) {
    this.config.showRowSelectAllCheckbox = value;
  }

  /**
   * Set show substitute rows status; Show substitute rows if true (Only applicable when paging is enabled)
   * @param value Show substitute rows status
   */
  @Input()
  public set showSubstituteRows(value: boolean) {
    this.config.showSubstituteRows = value;
  }

  /**
   * Set enable expandable rows; Enable expandable rows if true.
   * @param value Expandable row display status
   */
  @Input()
  public set expandableRows(value: boolean) {
    this.config.expandableRows = value;
  }

  /**
   * Set select checkbox on row click status; Select row on click if true
   * @param value Select on row click status
   */
  @Input()
  public set selectOnRowClick(value: boolean) {
    this.config.selectOnRowClick = value;
  }

  /**
   * Set expand detail row on row click status; Expand detail row on click if true
   * @param value Expand on row click status
   */
  @Input()
  public set expandOnRowClick(value: boolean) {
    this.config.expandOnRowClick = value;
  }

  /**
   * Set auto fetch status; Auto data bind on table init.
   * @param value Auto fetch status
   */
  @Input()
  public set autoFetch(value: boolean) {
    this.config.autoFetch = value;
  }

  /**
   * Set show loading spinner status; Show loading spinner if true
   * @param value Show loading spinner status
   */
  @Input()
  public set showLoadingSpinner(value: boolean) {
    this.config.showLoadingSpinner = value;
  }

  /**
   * Set select tracked by field; Identifier field in table data to track selected items uniquely
   * @param value Select track by field
   */
  @Input()
  public set selectTrackBy(value: string) {
    this.config.selectTrackBy = value;
  }

  /**
   * Set selected row identifier; Applicable when row select mode is SINGLE or SINGLE_TOGGLE.
   * @param value Selected row identifier.
   */
  @Input()
  public set selectedRow(value: any) {
    this.dataStateService.selectedRow = value;
    this.eventStateService.rowSelectChangeStream.emit(this.dataStateService.selectedRow);
  }

  /**
   * Set selected row identifiers collection; Applicable when selectMode is SINGLE or SINGLE_TOGGLE true.
   * @param value Selected row identifiers collection.
   */
  @Input()
  public set selectedRows(value: any[]) {
    this.dataStateService.selectedRows = value || [];
    this.eventStateService.rowSelectChangeStream.emit(this.dataStateService.selectedRows);
  }

  /**
   * Set filter de-bounce time milliseconds
   * @param value Filter debounce time
   */
  @Input()
  public set filterDebounceTime(value: number) {
    this.config.filterDebounceTime = value;
  }

  /**
   * Set filter de-bounce enabled state
   * @param value Filter debounce enable status
   */
  @Input()
  public set filterDebounce(value: boolean) {
    this.config.filterDebounce = value;
  }

  /**
   * Set show data reload button display status. Show refresh button if true
   * @param value Display data reload button enable status
   */
  @Input()
  public set showRefreshButton(value: boolean) {
    this.config.showRefreshButton = value;
  }

  /**
   * Set display column selector status; Display column selector if true
   * @param value Display column selector status
   */
  @Input()
  public set showColumnSelector(value: boolean) {
    this.config.showColumnSelector = value;
  }

  /**
   * Set expander column width in pixels; Applicable only when expandable column is enabled.
   * @param value Expandable column width
   */
  @Input()
  public set expanderColumnWidth(value: number | string) {
    this.config.expanderColumnWidth = value;
  }

  /**
   * Set index column width in pixels. Applicable only when index column is enabled.
   * @param value Index column width
   */
  @Input()
  public set indexColumnWidth(value: number | string) {
    this.config.indexColumnWidth = value;
  }

  /**
   * Set row selector column width in pixels. Applicable only when row selection is enabled.
   * @param value Row selector column width
   */
  @Input()
  public set selectionColumnWidth(value: number | string) {
    this.config.selectionColumnWidth = value;
  }

  /**
   * Set relative parent element. Grid positioning will be handled relative to this element.
   * @param value Relative parent DOM element
   */
  @Input()
  public set relativeParentElement(value: HTMLElement) {
    this.config.relativeParentElement = value;
  }

  /**
   * Set translation data object; Used to localize grid display text labels
   * @param data Translation data object
   */
  @Input()
  public set translations(data: DataTableTranslations) {
    this.config.translations = data;
  }

  /**
   * Set show row expand loading spinner state; Display row expand loading spinner if true
   * @param value Display row expand loading spinner if true
   */
  @Input()
  public set showRowExpandLoadingSpinner(value: boolean) {
    this.config.showRowExpandLoadingSpinner = value;
  }

  /**
   * Set data fetch offset; Start fetching data from provided offset onwards.
   * @param value Data fetch offset
   */
  @Input()
  public set offset(value: number) {
    this.config.offset = value;
    this.eventStateService.dataFetchStream.next(DataFetchMode.SOFT_LOAD);
  }

  /**
   * Set data limit to fetch per page; Applicable only when pageable
   * @param value Data limit
   */
  @Input()
  public set limit(value: number) {
    this.config.limit = value;
    this.eventStateService.dataFetchStream.next(DataFetchMode.SOFT_LOAD);
  }

  /**
   * Set current page number; Auto calculate offset depending on page number, do not explicitly set offset when page is used
   * @param value Current page
   */
  @Input()
  public set page(value: number) {
    this.offset = (value - 1) * this.config.limit;
  }

  /**
   * Get current page number
   * @return Current page number
   */
  public get page(): number {
    return Math.floor(this.config.offset / this.config.limit) + 1;
  }

  /**
   * Get data table header padding
   * @return Header padding size
   */
  public get headerPadding(): number {
    return this.config.contentHeight ? this.globalRefService.scrollbarWidth : 0;
  }

  /**
   * Get data loading status
   * @return True of data is loading
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
    this.columnBind = this.eventStateService.columnBind;
  }

  /**
   * On after data bind event handler
   * @param queryResult Query result object
   */
  private onAfterDataBind(queryResult: DataTableQueryResult<any>): void {
    this.dataStateService.itemCount = queryResult.count;
    this.setDataRows(queryResult.items);

    if (this.config.offset > this.dataStateService.itemCount) {
      this.config.offset = 0;
    }

    if (this.dataStateService.heardReload) {
      this.eventStateService.fetchFilterOptionsStream.next(false);
      this.dataStateService.heardReload = false;
    }

    this.dataStateService.dataLoading = false;
    this.eventStateService.dataBoundStream.emit();
  }

  /**
   * Get data item selected state
   * @param item Data item object
   * @return True if item is selected.
   */
  private getSelectedState(item: any): boolean {
    const id = get(item, this.config.selectTrackBy);
    if (id === undefined) {
      return false;
    }

    if (this.config.selectMode === 'multi') {
      return this.dataStateService.selectedRows.indexOf(id) > -1;
    }

    return this.dataStateService.selectedRow === id;
  }

  /**
   * Set data table item collection
   * @param items Data table item collection
   */
  private setDataRows(items: any[]): void {
    this.dataStateService.dataRows = items.map((item: any, index: number) => {
      return {
        dataLoaded: false,
        expanded: false,
        disabled: false,
        color: '',
        cssClass: '',
        tooltip: '',
        index: index,
        item: item,
        selected: this.getSelectedState(item)
      };
    });

    if (this.config.selectMode === 'multi') {
      this.dataStateService.allRowSelected = this.dataStateService.dataRows.length !== 0
        && this.dataStateService.dataRows.every((dataRow: DataTableRow<any>) => {
          return dataRow.selected;
        });
    }

    const substituteRowCount = this.config.limit - this.dataStateService.dataRows.length;
    this.dataStateService.substituteRows = Array.from({length: substituteRowCount});
  }

  /**
   * Initialize data fetch event
   */
  private initDataFetchEvent(): void {
    this.dataFetchStreamSubscription = this.eventStateService.dataFetchStream
      .pipe(
        debounceTime(20),
        switchMap((fetchMode: DataFetchMode) => this.mapDataBind(fetchMode))
      )
      .subscribe((queryResult: DataTableQueryResult<any>) => {
        this.onAfterDataBind(queryResult);
      });
  }

  /**
   * Re-map data binding data
   * @param fetchMode Data fetch mode
   * @return Data table query result stream
   */
  private mapDataBind(fetchMode: DataFetchMode): Observable<DataTableQueryResult<any>> {
    this.dataStateService.dataLoading = true;
    if (fetchMode === DataFetchMode.HARD_RELOAD) {
      this.clearRowSelectState();
      this.clearColumnState();
      this.dataStateService.heardReload = true;
      this.config.offset = 0;
    }

    const params: DataTableRequestParams = {
      loadData: fetchMode === DataFetchMode.HARD_RELOAD || fetchMode === DataFetchMode.SOFT_RELOAD
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

  /**
   * Initialize data table state via previous state snapshot; Applicable only when persist table state is enabled
   */
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

  /**
   * After component initialize lifecycle event handler.
   */
  public ngAfterContentInit(): void {
    if (!this.config.relativeParentElement) {
      this.config.relativeParentElement = this.dataTableElement.nativeElement;
    }

    if (!this.dataStateService.onDataBind) {
      this.dataSource = this.eventStateService.staticDataSourceStream;
    }

    this.initDataTableState();
    this.initDataFetchEvent();

    if (this.config.autoFetch) {
      this.eventStateService.dataFetchStream.next(DataFetchMode.SOFT_LOAD);
    }

    this.eventStateService.fetchFilterOptionsStream.next(true);
    this.eventStateService.initStream.emit(this);
  }

  /**
   * Component destroy lifecycle event handler
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
   * Reset column sort and filter state
   */
  private clearColumnState(): void {
    this.columns.forEach((column: DataTableColumnComponent) => {
      column.resetSortOrder();
      column.filter = undefined;
    });
  }

  /**
   * Clear selected data row status
   */
  private clearRowSelectState(): void {
    this.dataStateService.selectedRow = undefined;
    this.dataStateService.selectedRows = [];
    this.dataStateService.allRowSelected = false;
  }

  /**
   * Fetch data from data source
   * @param fetchMode Data fetch mode
   */
  public fetchData(fetchMode: DataFetchMode = DataFetchMode.SOFT_RELOAD): void {
    this.eventStateService.dataFetchStream.next(fetchMode);
  }

  /**
   * Initialize data source
   * @param source Data source stream
   */
  public initDataSource(source: Observable<any>): void {
    this.dataTableResourceService.setDataSource(source);

    this.onDataBind = (params: DataTableRequestParams): Observable<DataTableQueryResult<any>> => {
      if (params.loadData) {
        this.dataTableResourceService.setDataSource(source);
      }

      return this.dataTableResourceService.query(params);
    };

    this.onFilterValueExtract = (column: DataTableColumnComponent): Observable<DataTableFilterOption[]> => {
      return this.dataTableResourceService.extractFilterOptions(column);
    };
  }

  /**
   * Component value write event handler; Form control support implementation
   */
  public writeValue(value: any): void {
    if (this.config.selectMode === 'multi') {
      this.selectedRows = value;
    } else {
      this.selectedRow = value;
    }
  }

  /**
   * Register select change event handler; Form control support implementation
   * @param onSelectChange Select change event handler callback
   */
  public registerOnChange(onSelectChange: (value: any) => void): void {
    this.rowSelectChangeSubscription = this.eventStateService.rowSelectChangeStream
      .subscribe((selectedIds: any | any[]) => {
        onSelectChange(selectedIds);
      });
  }

  /**
   * Register on touch event handler; Form control support implementation
   * @param fn Touch event callback handler
   */
  public registerOnTouched(fn: any): void {
  }

  /**
   * Get table width in pixels
   */
  public get tableWidth(): number {
    return this.config.width || this.dataStateService.tableWidth;
  }
}
