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
  ViewChild,
  OnInit,
  NgZone
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Subscription, Observable, of, Subject } from 'rxjs';
import { catchError, debounceTime, switchMap } from 'rxjs/operators';

import { get } from '../../../utility/services/object-utility.class';

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

import { DataTableSelectMode } from '../../models/data-table-select-mode.model';
import { DataTableStorageMode } from '../../models/data-table-storage-mode.model';
import { DataTableScrollPoint } from '../../models/data-table-scroll-point.model';
import { DataFetchMode } from '../../models/data-fetch-mode.enum';

import { DataTableColumnComponent } from '../data-table-column/data-table-column.component';

import { DragAndDropService, GlobalRefService } from '../../../utility/utility.module';
import { ValidatorService } from '../../../utility/services/validator.service';
import { DataTableEventStateService } from '../../services/data-table-event.service';
import { DataTableDataStateService } from '../../services/data-table-data-state.service';
import { DataTablePersistenceService } from '../../services/data-table-persistence.service';
import { DataTableConfigService } from '../../services/data-table-config.service';
import { DataTableScrollPositionService } from '../../services/data-table-scroll-position.service';
import { DataTableResourceService } from '../../services/data-table-resource.service';
import { DataTableQueryField } from '../../models/data-table-query-field.model';

/**
 * Data table component; Data table entry component.
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
export class DataTableComponent implements OnDestroy, OnInit, AfterContentInit, ControlValueAccessor {
  private rowSelectChangeSubscription: Subscription;
  private dataFetchStreamSubscription: Subscription;
  private scrollPositionSubscription: Subscription;

  /**
   * Data table column component collection.
   */
  @ContentChildren(DataTableColumnComponent)
  public columns: QueryList<DataTableColumnComponent>;

  /**
   * Template to display when data row is expanded for detail view.
   */
  @ContentChild('ngDataTableRowExpand', { static: true })
  public rowExpandTemplate: TemplateRef<any>;

  /**
   * Template to display when data set is empty.
   */
  @ContentChild('ngDataTableNoRecords', { static: true })
  public noRecordsTemplate: TemplateRef<any>;

  /**
   * Template to display while loading data.
   */
  @ContentChild('ngDataTableLoadingSpinner', { static: true })
  public loadingSpinnerTemplate: TemplateRef<any>;

  /**
   * Template to display while row is expanding to load detail view.
   */
  @ContentChild('ngDataTableRowExpandLoadingSpinner', { static: true })
  public rowExpandLoadingSpinnerTemplate: TemplateRef<any>;

  /**
   * Data table self DOM element reference.
   */
  @ViewChild('dataTableElement', { static: true })
  public dataTableElement: ElementRef<HTMLDivElement>;

  // Event handlers

  /**
   * Data table initialize event handler.
   * Triggered after data table initialize.
   */
  @Output()
  public init: EventEmitter<DataTableComponent>;

  /**
   * Row selected state change event handler.
   * Triggered when table row selected state change.
   */
  @Output()
  public rowSelectChange: EventEmitter<any | any[]>;

  /**
   * Row click event handler.
   * Triggered when data row is clicked.
   */
  @Output()
  public rowClick: EventEmitter<DataTableRowClickEventArgs<any>>;

  /**
   * Row double click event handler.
   * Triggered when data row is double clicked.
   */
  @Output()
  public rowDoubleClick: EventEmitter<DataTableDoubleClickEventArgs<any>>;

  /**
   * Header click event handler.
   * Triggered when header column clicked.
   */
  @Output()
  public headerClick: EventEmitter<DataTableHeaderClickEventArgs>;

  /**
   * All row select change event handler.
   * Triggered when all row select state changed.
   */
  @Output()
  public allRowSelectChange: EventEmitter<boolean>;

  /**
   * Cell click event handler.
   * Triggered when clicked on a cell.
   */
  @Output()
  public cellClick: EventEmitter<DataTableCellClickEventArgs<any>>;

  /**
   * Data bound event handler.
   * Triggered after data bind.
   */
  @Output()
  public dataBound: EventEmitter<void>;

  /**
   * Row bind event handler.
   * Trigger on each row data bind.
   */
  @Output()
  public rowBind: EventEmitter<DataTableRow<any>>;

  /**
   * Column bind event handler.
   * Triggered after column data bind.
   */
  @Output()
  public columnBind: EventEmitter<DataTableColumnComponent>;

  /**
   * Cell bind event handler.
   * Triggered after data table cell data bind.
   */
  @Output()
  public cellBind: EventEmitter<DataTableCellBindEventArgs<any>>;

  // Input Events

  /**
   * Set data bind event handler callback. This handler is fired on each data fetch request.
   */
  @Input()
  public set onDataBind(value: DataTableDataBindCallback<any>) {
    this.dataStateService.onDataBind = value;
  }

  /**
   * Set filter value extract event handler callback. Used to extract filter value collection dynamically when
   * explicit data bind functionality is used with onDataBind callback.
   */
  @Input()
  public set onFilterValueExtract(value: DataTableFilterValueExtractCallback<any>) {
    this.dataStateService.onFilterValueExtract = value;
  }

  /**
   * Set on dynamic row span extract event handler callback.
   */
  @Input()
  public set onDynamicRowSpanExtract(value: DataTableDynamicRowSpanExtractorCallback<any>) {
    this.dataStateService.onDynamicRowSpanExtract = value;
  }

  // Input parameters

  /**
   * Set static data items collection. No need to set data source when static items collection is provided.
   */
  @Input()
  public set items(value: any[]) {
    if (!value) {
      return;
    }

    this.eventStateService.staticDataSourceStream.next(value);
  }

  /**
   * Set data source observable. This observable is used to retrieve row data for binding.
   */
  @Input()
  public set dataSource(source: Observable<any[]>) {
    this.initDataSource(source);
  }

  /**
   * Set data table unique identifier.
   */
  @Input()
  public set id(value: string) {
    if (!ValidatorService.idPatternValidatorExpression.test(value)) {
      throw Error('Invalid [id] input value. Unique identifier parameter only accept string begin with a letter ([A-Za-z]) and may be followed by any number of letters, digits ([0-9]), hyphens ("-"), underscores ("_").');
    }

    this.dataStateService.id = value;
  }

  /**
   * Set persist table state on provided storage mode if true. Depends on storageMode property.
   */
  @Input()
  public set persistTableState(value: boolean) {
    this.config.persistTableState = value;
  }

  /**
   * Set storage mode to persist table state. Only applicable when persistTableState is true.
   */
  @Input()
  public set storageMode(value: DataTableStorageMode) {
    this.dataTableStateService.storageMode = value;
  }

  /**
   * Set multiple column sortable if true. Only applicable for sortable true columns.
   */
  @Input()
  public set multiColumnSortable(value: boolean) {
    this.config.multiColumnSortable = value;
  }

  /**
   * Set table header bar visible if true.
   */
  @Input()
  public set showHeader(value: boolean) {
    this.config.showHeader = value;
  }

  /**
   * Set title to be shown in the header. Only applicable when showHeader is true.
   */
  @Input()
  public set title(value: string) {
    this.config.title = value;
  }

  /**
   * Set width value in pixels. Can be used to set the width of teh table (responsive if not set).
   */
  @Input()
  public set width(value: string | number) {
    this.config.width = value;
  }

  /**
   * Set minimum table content height value in pixels. Can be used to set the minimum height of the table content area.
   */
  @Input()
  public set minContentHeight(value: string | number) {
    this.config.minContentHeight = value;
  }

  /**
   * Minimum table content width value in pixels. Can be used to set the minimum width of the table content area.
   */
  @Input()
  public set minContentWidth(value: string | number) {
    this.config.minContentWidth = value;
  }

  /**
   * Table content height value in pixels. This configuration can be used to enable table content vertical
   * scrolling for responsive design.
   */
  @Input()
  public set contentHeight(value: string | number) {
    this.config.contentHeight = value;
  }

  /**
   * Show pagination bar if true. Depends on offset and limit values. Trigger dataLoad event with offset
   * and limit values.
   */
  @Input()
  public set pageable(value: boolean) {
    this.config.pageable = value;
  }

  /**
   * Enable scrolling based on-demand data loading functionality if true. Trigger dataLoad event with offset
   * and limit values when scroll to bottom until data source exhaust.
   */
  @Input()
  public set loadOnScroll(value: boolean) {
    this.config.loadOnScroll = value;
  }

  /**
   * Set view height distance ratio to trigger data fetch on scroll. Applicable only when load on scroll mode is enabled.
   */
  @Input()
  public set loadViewDistanceRatio(value: number) {
    this.config.loadViewDistanceRatio = value;
  }

  /**
   * Set auto generated index column with row numbering if true.
   */
  @Input()
  public set showIndexColumn(value: boolean) {
    this.config.showIndexColumn = value;
  }

  /**
   * Set index column header title. Applicable when showIndexColumn is true.
   */
  @Input()
  public set indexColumnTitle(value: string) {
    this.config.indexColumnTitle = value;
  }

  /**
   * Set row select checkbox and select state if true.
   */
  @Input()
  public set rowSelectable(value: boolean) {
    this.config.rowSelectable = value;
  }

  /**
   * Data table row select mode. Applicable only when rowSelectable is true.
   */
  @Input()
  public set selectMode(value: DataTableSelectMode) {
    this.config.selectMode = value;
  }

  /**
   * Set select all row checkbox on column header visible if true.
   * Only applicable when showRowSelectCheckbox, rowSelectable is true & item selectMode is  multi.
   */
  @Input()
  public set showRowSelectCheckbox(value: boolean) {
    this.config.showRowSelectCheckbox = value;
  }

  /**
   * Set select all row checkbox on column header visible if true.
   * Only applicable when showRowSelectCheckbox, rowSelectable is true & item selectMode is  multi.
   */
  @Input()
  public set showRowSelectAllCheckbox(value: boolean) {
    this.config.showRowSelectAllCheckbox = value;
  }

  /**
   * Set substitute rows visible if true. Fill with empty rows when row count < limit.
   */
  @Input()
  public set showSubstituteRows(value: boolean) {
    this.config.showSubstituteRows = value;
  }

  /**
   * Set row expander visible if true. Render ngDataTableExpand template on expand click.
   */
  @Input()
  public set expandableRows(value: boolean) {
    this.config.expandableRows = value;
  }

  /**
   * Set trigger row select on click event if true. Applicable only when rowSelectable is true.
   */
  @Input()
  public set selectOnRowClick(value: boolean) {
    this.config.selectOnRowClick = value;
  }

  /**
   * Set expand and render expand template on row click if true. Only applicable when expandableRows is true.
   */
  @Input()
  public set expandOnRowClick(value: boolean) {
    this.config.expandOnRowClick = value;
  }

  /**
   * Auto trigger dataLoad event on initialization if true.
   */
  @Input()
  public set autoFetch(value: boolean) {
    this.config.autoFetch = value;
  }

  /**
   * Set loading spinner visible if true. Show loading spinner when data fetch operation is triggered.
   */
  @Input()
  public set showLoadingSpinner(value: boolean) {
    this.config.showLoadingSpinner = value;
  }

  /**
   * Set select option track by field path which is used to uniquely identify row for selection tracking.
   * This field support object paths expressions 'root[0].nest'.
   */
  @Input()
  public set selectTrackBy(value: string) {
    this.config.selectTrackBy = value;
  }

  /**
   * Set selected row identifier. Select specified row on initial load.
   * Applicable when row select mode is SINGLE or SINGLE_TOGGLE.
   */
  @Input()
  public set selectedRow(value: any) {
    this.dataStateService.selectedRow = value;
    this.eventStateService.rowSelectChangeStream.emit(this.dataStateService.selectedRow);
  }

  /**
   * Set selected row identifiers collection. Select specified rows on initial load.
   * Applicable when selectMode is SINGLE or SINGLE_TOGGLE true.
   */
  @Input()
  public set selectedRows(value: any[]) {
    this.dataStateService.selectedRows = value || [];
    this.eventStateService.rowSelectChangeStream.emit(this.dataStateService.selectedRows);
  }

  /**
   * Set filter debounce time in milliseconds. Applicable only when filterDebounce is true.
   */
  @Input()
  public set filterDebounceTime(value: number) {
    this.config.filterDebounceTime = value;
  }

  /**
   * Set filter data debounce enabled state with provided filterDebounceTime if true.
   */
  @Input()
  public set filterDebounce(value: boolean) {
    this.config.filterDebounce = value;
  }

  /**
   * Set refresh button visible if true. Only applicable when showHeader is true.
   */
  @Input()
  public set showRefreshButton(value: boolean) {
    this.config.showRefreshButton = value;
  }

  /**
   * Row selector column width in pixels. Applicable only when showColumnSelector is true.
   */
  @Input()
  public set showColumnSelector(value: boolean) {
    this.config.showColumnSelector = value;
  }

  /**
   * Set column selector dropdown width in pixels. Only applicable when showColumnSelector is true.
   */
  @Input()
  public set columnSelectorWidth(value: number) {
    this.config.columnSelectorWidth = value;
  }

  /**
   * Set expander column width in pixels. Applicable only when expandableRows is true.
   */
  @Input()
  public set expanderColumnWidth(value: number | string) {
    this.config.expanderColumnWidth = value;
  }

  /**
   * Set index column width in pixels. Applicable only when showIndexColumn is true.
   */
  @Input()
  public set indexColumnWidth(value: number | string) {
    this.config.indexColumnWidth = value;
  }

  /**
   * Set row selector column width in pixels. Applicable only when showColumnSelector is true.
   */
  @Input()
  public set selectionColumnWidth(value: number | string) {
    this.config.selectionColumnWidth = value;
  }

  /**
   * Set translation data object. Used to localize table static label text.
   */
  @Input()
  public set translations(data: DataTableTranslations) {
    this.config.translations = data;
  }

  /**
   * Set row expand loading spinner visible if true. Applicable only when row expand is enabled.
   */
  @Input()
  public set showRowExpandLoadingSpinner(value: boolean) {
    this.config.showRowExpandLoadingSpinner = value;
  }

  /**
   * Set data offset value (start offset index). Applicable only when pageable is true.
   */
  @Input()
  public set offset(value: number) {
    this.config.offset = value;
    this.eventStateService.dataFetchStream.next(DataFetchMode.SOFT_LOAD);
  }

  /**
   * Set data limit value (page size). Applicable only when pageable is true.
   */
  @Input()
  public set limit(value: number) {
    this.config.limit = value;
    this.eventStateService.dataFetchStream.next(DataFetchMode.SOFT_LOAD);
  }

  /**
   * Set current page number. Auto calculate offset depending on page number,
   * do not explicitly set offset when page is used.
   */
  @Input()
  public set page(value: number) {
    this.offset = (value - 1) * this.config.limit;
  }

  /**
   * Get current page number.
   */
  public get page(): number {
    return Math.floor(this.config.offset / this.config.limit) + 1;
  }

  /**
   * Get data table header padding in pixels.
   */
  public get headerPadding(): number {
    return this.config.contentHeight ? this.globalRefService.scrollbarWidth : 0;
  }

  /**
   * Get data loading status.
   */
  public get isLoading(): boolean {
    return !(this.config.loadOnScroll && this.dataStateService.dataRows.length)
      && this.config.showLoadingSpinner && this.dataStateService.dataLoading;
  }

  constructor(
    private dragAndDropService: DragAndDropService,
    private dataTableStateService: DataTablePersistenceService,
    private globalRefService: GlobalRefService,
    private eventStateService: DataTableEventStateService,
    private dataTableResourceService: DataTableResourceService<any>,
    private zone: NgZone,
    public dataStateService: DataTableDataStateService,
    public scrollPositionService: DataTableScrollPositionService,
    public config: DataTableConfigService
  ) {
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

    if (!this.dataStateService.dataLoading || this.dataStateService.heardReload) {
      this.eventStateService.fetchFilterOptionsStream.next();
    }

    this.dataStateService.heardReload = false;
    this.dataStateService.dataLoading = false;
    this.eventStateService.dataBoundStream.emit();
  }

  /**
   * Get data item selected state
   * @param item Data item object
   * @return True if item is selected
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
    const mappedItems = items.map((item: any, index: number) => {
      let currentIndex;
      if (this.config.loadOnScroll || this.config.pageable) {
        currentIndex = this.config.offset + index + 1;
      } else {
        currentIndex = index + 1;
      }

      return {
        id: this.dataStateService.getUniqueId('dr', currentIndex),
        dataLoaded: false,
        expanded: false,
        disabled: false,
        color: '',
        cssClass: '',
        tooltip: '',
        index: currentIndex,
        item,
        selected: this.getSelectedState(item)
      };
    });

    if (this.config.loadOnScroll) {
      this.dataStateService.dataRows = [ ...this.dataStateService.dataRows, ...mappedItems ];
    } else {
      this.dataStateService.dataRows = mappedItems;
    }

    if (this.config.selectMode === 'multi') {
      this.dataStateService.allRowSelected =
        this.dataStateService.dataRows.length !== 0 &&
        this.dataStateService.dataRows.every((dataRow: DataTableRow<any>) => {
          return dataRow.selected;
        });
    }

    if (!this.config.loadOnScroll) {
      const substituteRowCount = this.config.limit - this.dataStateService.dataRows.length;
      this.dataStateService.substituteRows = Array.from({
        length: substituteRowCount
      });
    }
  }

  /**
   * Initialize data fetch event
   */
  private initDataFetchEvent(): void {
    const noop = {
      items: [],
      count: 0
    };

    this.dataFetchStreamSubscription = this.eventStateService.dataFetchStream
      .pipe(
        debounceTime(20),
        switchMap((fetchMode: DataFetchMode) => this.mapDataBind(fetchMode)),
        catchError(() => {
          return of(noop);
        })
      )
      .subscribe(
        (queryResult: DataTableQueryResult<any>) => {
          this.onAfterDataBind(queryResult);
        },
        () => {
          this.onAfterDataBind(noop);
        }
      );
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
      params.fields = this.columns.filter(column => {
          return column.sortable || column.filterable;
        }).map((column: DataTableColumnComponent): DataTableQueryField => {
          return {
            id: column.id,
            displayTrackBy: column.displayTrackBy,
            sortTrackBy: column.sortTrackBy || column.displayTrackBy,
            filterTrackBy: column.filterTrackBy || column.displayTrackBy,
            sortable: column.sortable,
            sortOrder: column.sortOrder,
            sortPriority: column.sortPriority || (column.sortOrder ? 1 : 0),
            filterable: column.filterable,
            filterValue: column.getFilterValue(),
            filterExpression: column.filterExpression,
          };
        });
    }

    if (this.config.pageable || this.config.loadOnScroll) {
      params.offset = this.config.offset;
      params.limit = this.config.limit;
    }

    if (this.config.persistTableState) {
      this.dataTableStateService.setState(this.dataStateService.id, params);
    }

    return this.dataStateService.onDataBind(params);
  }

  /**
   * Initialize data table state via previous state snapshot; Applicable only when persist table state is enabled
   */
  private initDataTableState(): void {
    if (this.config.persistTableState) {
      const dataTableState = this.dataTableStateService.getState(this.dataStateService.id);
      if (dataTableState) {
        this.columns.forEach((column: DataTableColumnComponent) => {
          const field = dataTableState.fields.find(col => {
            return col.displayTrackBy === column.displayTrackBy;
          });

          if (field) {
            if (column.filterable && field.filterable) {
              if (column.showDropdownFilter) {
                if (field.filterValue) {
                  if (Array.isArray(field.filterValue)) {
                    column.filter = field.filterValue.map((value) => {
                      return {
                        key: value,
                        value
                      };
                    });
                  } else {
                    column.filter = {
                      key: field.filterValue,
                      value: field.filterValue
                    };
                  }
                }
              } else {
                column.filter = field.filterValue;
              }
            }

            if (column.sortable && field.sortable) {
              column.sortOrder = field.sortOrder;
            }
          }
        });

        this.config.limit = dataTableState.limit;
        this.config.offset = dataTableState.offset;
      }
    }
  }

  /**
   * After component initialize lifecycle event handler
   */
  public ngAfterContentInit(): void {
    this.dataStateService.relativeParentElement = this.dataTableElement.nativeElement;

    if (!this.dataStateService.onDataBind) {
      this.dataSource = this.eventStateService.staticDataSourceStream;
    }

    this.initDataTableState();
    this.initDataFetchEvent();

    if (this.config.autoFetch) {
      this.eventStateService.dataFetchStream.next(DataFetchMode.SOFT_LOAD);
    }

    this.eventStateService.fetchFilterOptionsStream.next();
    this.eventStateService.initStream.emit(this);

    if (this.config.loadOnScroll) {
      this.scrollPositionSubscription = this.scrollPositionService.scrollPositionStream.subscribe((pos: DataTableScrollPoint) => {
        const roundingPixel = 1;
        const gutterPixel = 1;

        if (
          pos.isVertical
          && pos.scrollTop >= pos.scrollHeight - (1 + this.config.loadViewDistanceRatio) * pos.clientHeight - roundingPixel - gutterPixel
          && (this.config.offset + this.config.limit) < this.dataStateService.itemCount
          && !this.dataStateService.dataLoading
        ) {
          this.dataStateService.dataLoading = true;
          this.zone.run(() => {
            this.offset = this.config.offset + this.config.limit;
          });
        }
      });
    }
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

    if (!this.onFilterValueExtract) {
      this.onFilterValueExtract = this.dataTableResourceService.extractFilterOptions.bind(this.dataTableResourceService);
    }
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
    this.rowSelectChangeSubscription = this.eventStateService.rowSelectChangeStream.subscribe((selectedIds: any | any[]) => {
      onSelectChange(selectedIds);
    });
  }

  /**
   * Register on touch event handler; Form control support implementation
   * @param fn Touch event callback handler
   */
  public registerOnTouched(fn: any): void {}

  /**
   * Get table width in pixels
   */
  public get tableWidth(): number {
    return this.config.width || this.dataStateService.tableWidth;
  }

  public ngOnInit(): void {
    if (!this.dataStateService.id) {
      throw Error('Missing required parameter value for [id] input.');
    }

    if (this.config.loadOnScroll) {
      if (!this.config.minContentHeight) {
        throw Error('[minContentHeight] is required when [infiniteScrollable] is enabled.');
      }

      if (this.config.pageable) {
        throw Error('[pageable] and [infiniteScrollable] cannot be enabled at the same time.');
      }
    }
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

    if (this.scrollPositionSubscription) {
      this.scrollPositionSubscription.unsubscribe();
    }

    this.dataTableResourceService.dispose();
  }
}
