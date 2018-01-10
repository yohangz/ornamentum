import {
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  TemplateRef,
  AfterContentInit
} from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

import { DataTableColumnComponent } from '../data-table-column/data-table-column.component';

import { SortOrder } from '../../models/data-table-sort-order.enum';
import {
  CellClickEventArgs,
  DataRow, DataTableCellBindEventArgs,
  DataTableParams,
  DataTableTranslations,
  DoubleClickEventArgs,
  FilterEventArgs,
  FilterValueExtractCallback,
  GroupDetail,
  GroupFieldExtractorCallback,
  HeaderClickEventArgs,
  RowClickEventArgs,
  RowSelectEventArgs
} from '../../models/data-table.model';
import { StorageMode } from '../../models/data-table-storage-mode.enum';

import { DataTableStateService } from '../../services/data-table-state.service';

import { DragAndDropService, GlobalRefService } from '../../../utility';

/**
 * Data table component.
 * @class DataTableComponent
 */
@Component({
  providers: [DataTableStateService],
  selector: 'ng-data-table',
  styleUrls: ['./data-table.component.scss'],
  templateUrl: './data-table.component.html'
})
export class DataTableComponent implements OnInit, OnDestroy, AfterContentInit {
  public SortOrder = SortOrder;

  private _items: any[] = [];
  private _selectAllCheckbox = false;
  private _offset = 0;
  private _limit = 10;
  private resizeInProgress = false;
  private isHeardReload = false;
  private _translations: DataTableTranslations = {
    expandColumn: 'expand',
    indexColumn: 'index',
    noDataMessageHeader: 'Whoops!',
    noDataMessageBody: 'No data to display. Added data will appear here.',
    paginationLimit: 'Limit',
    paginationRange: 'Results',
    selectColumn: 'select'
  };

  public scrollPosition: number;

  public indexColumnVisible: boolean;
  public selectColumnVisible: boolean;
  public expandColumnVisible: boolean;

  private columnFilterStream = new Subject();
  private dataFetchStream = new Subject();
  public scrollPositionStream = new Subject();

  public customFilterEventEmitter = new EventEmitter<FilterEventArgs>();

  private headerClickSubscription: Subscription;
  private rowClickSubscription: Subscription;
  private columnFilterSubscription: Subscription;
  private selectStateSubscription: Subscription;
  private customFilterSubscription: Subscription;

  public rowSelectStateUpdate = new EventEmitter();

  public dataRows: DataRow[] = [];
  public substituteItems: any[] = [];
  public tableWidth: number;

  /**
   * Set reloading state.
   * @param {boolean} value
   */
  public reloading = true;

  @ContentChildren(DataTableColumnComponent)
  public columns: QueryList<DataTableColumnComponent>;

  @ContentChild('ngDataTableExpand')
  public expandTemplate: TemplateRef<any>;

  // Event handlers

  /**
   * On data table init event handler.
   * @type {EventEmitter<DataTableComponent>}
   */
  @Output()
  public onInit = new EventEmitter<DataTableComponent>();

  /**
   * On row selected state change event handler.
   * @default undefined
   * @type {EventEmitter<any>}
   */
  @Output()
  public onRowSelectedStateChange = new EventEmitter<RowSelectEventArgs>();

  /**
   * On row click event handler.
   * @type {EventEmitter<any>}
   */
  @Output()
  public onRowClick = new EventEmitter<RowClickEventArgs>();

  /**
   * On row double click event handler.
   * @type {EventEmitter<any>}
   */
  @Output()
  public onRowDoubleClick = new EventEmitter<DoubleClickEventArgs>();

  /**
   * On header click event handler.
   * @type {EventEmitter<any>}
   */
  @Output()
  public onHeaderClick = new EventEmitter<HeaderClickEventArgs>();

  /**
   * On cell click event handler.
   * @type {EventEmitter<any>}
   */
  @Output()
  public onCellClick = new EventEmitter<CellClickEventArgs>();

  /**
   * On data load event handler.
   * Fired on each data fetch request. But not on hard reload.
   * @type {EventEmitter<DataTableParams>}
   */
  @Output()
  public onDataLoad = new EventEmitter<DataTableParams>();

  /**
   * On refresh event handler.
   * Fired on hard reload button click.
   * @type {EventEmitter<DataTableParams>}
   */
  @Output()
  public onRefresh = new EventEmitter<DataTableParams>();

  /**
   * On row bind event handler.
   * @type {EventEmitter<DataRow>}
   */
  @Output()
  public onRowBind = new EventEmitter<DataRow>();

  /**
   * On cell bind event handler.
   * @type {EventEmitter<DataTableCellBindEventArgs>}
   */
  @Output()
  public onCellBind = new EventEmitter<DataTableCellBindEventArgs>();

  // Input Events

  /**
   * On filter value extract event handler callback.
   * @default undefined
   * @type {FilterValueExtractCallback}
   */
  @Input()
  public onFilterValueExtract: FilterValueExtractCallback;

  /**
   * On group field extract event handler callback.
   * @default default empty extractor
   * @type {GroupFieldExtractorCallback}
   */
  @Input()
  public onGroupFieldExtract: GroupFieldExtractorCallback = () => {
    return [];
  };

  // Input parameters

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
  public persistTableState = false;

  /**
   * Storage more to persist table state.
   */
  @Input()
  public set storageMode(value: StorageMode) {
    this.dataTableStateService.storageMode = value;
  }

  /**
   * Enable multi column sorting support if true.
   * @type {boolean}
   */
  @Input()
  public multiColumnSortable = false;

  /**
   * Show header if true.
   * @default true
   * @type {boolean}
   */
  @Input()
  public showHeader = true;

  /**
   * Header title text.
   * @default empty
   * @type {string}
   */
  @Input()
  public title = '';

  /**
   * Table min height
   * Used to set overlay height when not pageable.
   * @default undefined
   * @type {string|number}
   */
  @Input()
  public minHeight: string | number;

  /**
   * Table min width.
   * Used to set min width of the table. Useful to build a mobile responsive grid without scattering data.
   * @default undefined
   * @type {string|number}
   */
  @Input()
  public minWidth: string | number;

  /**
   * Height of the table content.
   * This will enable vertical scrolling.
   * @default empty
   * @type {string|number}
   */
  @Input()
  public contentHeight: string | number;

  /**
   * Pageable if true.
   * @default true
   * @type {boolean}
   */
  @Input()
  public pageable = true;

  /**
   * Show auto generated index counter column.
   * @default true
   * @type {boolean}
   */
  @Input()
  public showIndexColumn = true;

  /**
   * Index column title text
   * @default empty
   * @type {string}
   */
  @Input()
  public indexColumnTitle = '';

  /**
   * Row selectable if true (Show row select checkbox).
   * @default false
   * @type {rowSelectable}
   */
  @Input()
  public rowSelectable = false;

  /**
   * Multi row selectable if true.
   * @default true
   * @type {boolean}
   */
  @Input()
  public multiRowSelectable = true;

  /**
   * Show substitute rows (Only applicable when paging is enabled).
   * @default true
   * @type {boolean}
   */
  @Input()
  public showSubstituteRows = true;

  /**
   * Enable expandable rows.
   * @default false
   * @type {boolean}
   */
  @Input()
  public expandableRows = false;

  /**
   * Select checkbox on row click.
   * @default false
   * @type {boolean}
   */
  @Input()
  public selectOnRowClick = false;

  /**
   * Expand table on row click.
   * @default false
   * @type {boolean}
   */
  @Input()
  public expandOnRowClick = false;

  /**
   * Auto onDataLoad on init.
   * @default true
   * @type {boolean}
   */
  @Input()
  public autoFetch = true;

  /**
   * Show loading spinner.
   * @default false
   * @type {boolean}
   */
  @Input()
  public showLoadingSpinner = false;

  /**
   * Select tracked by (identifier from table data to track selected items uniquely)
   * @default id
   * @type {string}
   */
  @Input()
  public selectTrackBy = 'id';

  /**
   * Selected row (effective when multiRowSelectable false).
   * @default undefined
   * @type {any}
   */
  @Input()
  public selectedRow: any;

  /**
   * Selected rows (effective when multiRowSelectable true).
   * @default []
   * @type {Array}
   */
  @Input()
  public selectedRows: any[] = [];

  /**
   * Total item count in data source.
   * @default undefined
   * @type {number}
   */
  @Input()
  public itemCount: number;

  /**
   * Filter de-bounce time milliseconds.
   * @default 500
   * @type {number}
   */
  @Input()
  public filterDebounceTime = 500;

  /**
   * Filter de-bounce enabled state.
   * @default false
   * @type {boolean}
   */
  @Input()
  public filterDebounce = false;

  /**
   * Show refresh button.
   * @default true
   * @type {boolean}
   */
  @Input()
  public showRefreshButton = true;

  /**
   * Show column selector.
   * @default true
   * @type {boolean}
   */
  @Input()
  public showColumnSelector = true;

  /**
   * Sets width for expander column.
   * @default 30
   * @type {number | string}
   */
  @Input()
  public expanderColumnWidth: number | string = 30;

  /**
   * Sets width for index column.
   * @default 30
   * @type {string | number}
   */
  @Input()
  public indexColumnWidth: number | string = 30;

  /**
   * Sets width for selection column.
   * @default 30
   * @type {string | number}
   */
  @Input()
  public selectionColumnWidth: number | string = 30;

  /**
   * Template to display when data set is empty.
   * @default default template
   * @type TemplateRef
   */
  @ContentChild('appDataTableNoRecords')
  public noRecordsTemplate: TemplateRef<any>;

  /**
   * Set data table items array.
   * @param {any[]} value
   */
  @Input()
  public set items(value: any[]) {
    this._items = value;
    this.onAfterDataBind();
  }

  /**
   * Get data table items array.
   * @return {any[]}
   */
  public get items(): any[] {
    return this._items;
  }

  /**
   * Data table display text key translations.
   * @default defaultTranslations
   * @type {DataTableTranslations}
   * @param {DataTableTranslations} data
   */
  @Input()
  public set translations(data: DataTableTranslations) {
    this._translations = Object.assign(this._translations, data);
  }

  /**
   * Returns translations.
   * @returns {DataTableTranslations}
   */
  public get translations(): DataTableTranslations {
    return this._translations;
  }

  /**
   * Set offset.
   * @param value
   */
  @Input()
  public set offset(value: number) {
    this._offset = value;
    this.dataFetchStream.next(false);
  }

  /**
   * Get offset.
   * @return {number}
   */
  public get offset(): number {
    return this._offset;
  }

  /**
   * Set page item limit
   * @param value
   */
  @Input()
  public set limit(value: number) {
    this._limit = value;
    this.dataFetchStream.next(false);
  }

  /**
   * Set page item limit
   * @return {number}
   */
  public get limit(): number {
    return this._limit;
  }

  /**
   * Set page number.
   * @param value
   */
  @Input()
  public set page(value: number) {
    this.offset = (value - 1) * this.limit;
  }

  /**
   * Get page number.
   * @return {number}
   */
  public get page(): number {
    return Math.floor(this.offset / this.limit) + 1;
  }

  /**
   * Set select all checkboxes state.
   * @param {boolean} value
   */
  public set selectAllCheckbox(value: boolean) {
    this._selectAllCheckbox = value;
    this.onSelectAllCheckboxesChanged(value);
  }

  /**
   * Get select all checkboxes state.
   * @return {boolean}
   */
  public get selectAllCheckbox(): boolean {
    return this._selectAllCheckbox;
  }

  /**
   * Get last page number.
   * @return {number}
   */
  public get lastPage(): number {
    return Math.ceil(this.itemCount / this.limit);
  }

  constructor(private dragAndDropService: DragAndDropService,
              private dataTableStateService: DataTableStateService,
              private globalRefService: GlobalRefService) {
    this.dataTableStateService.storageMode = StorageMode.SESSION;
  }

  /**
   * On after data bind handler.
   */
  private onAfterDataBind(): void {
    this._selectAllCheckbox = false;
    this.dataRows = this.getRows();
    this.substituteItems = this.getSubstituteItems();
    this.rowSelectStateUpdate.emit();

    if (this._offset > this.itemCount) {
      this._offset = 0;
    }

    if (this.isHeardReload) {
      this.fetchFilterOptions();
      this.isHeardReload = false;
    }

    setTimeout(() => {
      this.reloading = false;
    }, 500);
  }

  /**
   * On select all changed.
   * @param {boolean} selectedState
   */
  private onSelectAllCheckboxesChanged(selectedState: boolean): void {
    this.items.forEach(item => {
      const id = item[this.selectTrackBy];
      const index = this.selectedRows.indexOf(id);

      if (selectedState) {
        if (index < 0) {
          this.selectedRows.push(id);
        }
      } else {
        if (index > -1) {
          this.selectedRows.splice(index, 1);
        }
      }
    });

    this.rowSelectStateUpdate.emit();
  }

  /**
   * Init default values.
   */
  private initDefaultValues(): void {
    this.indexColumnVisible = this.showIndexColumn;
    this.selectColumnVisible = this.rowSelectable;
    this.expandColumnVisible = this.expandableRows;
  }

  /**
   * Initialzie default click events.
   */
  private initDefaultClickEvents() {
    this.headerClickSubscription = this.onHeaderClick.subscribe((headerClickEventArgs: HeaderClickEventArgs) => {
      this.sortData(headerClickEventArgs.column);
    });

    if (this.selectOnRowClick || (this.expandableRows && this.expandOnRowClick)) {
      this.rowClickSubscription = this.onRowClick.subscribe((rowClickEventArgs: RowClickEventArgs) => {
        if (rowClickEventArgs.event.srcElement.classList.contains('ng-ignore-propagation')) {
          return;
        }

        if (this.selectOnRowClick) {
          rowClickEventArgs.row.selected = !rowClickEventArgs.row.selected;
          this.onRowSelectChanged(rowClickEventArgs.row);
        }


        if (this.expandOnRowClick) {
          rowClickEventArgs.row.expanded = !rowClickEventArgs.row.expanded;
        }
      });
    }
  }

  /**
   * Get data table params.
   * @param {boolean} resetOffset Reset the offset of true.
   * @return {DataTableParams} Data table parameters.
   */
  private getDataTableParams(resetOffset: boolean): DataTableParams {
    const params = <DataTableParams>{};

    if (resetOffset) {
      this._offset = 0;
    }

    params.sortColumns = this.getSortColumns().map((column: DataTableColumnComponent) => {
      return {
        field: column.field,
        sortOrder: column.sortOrder,
        comparator: column.sortComparatorExpression
      };
    });

    if (this.pageable) {
      params.offset = this.offset;
      params.limit = this.limit;
    }

    params.filterColumns = this.getColumnFilterColumns().map((column: DataTableColumnComponent) => {
      return {
        field: column.filterField || column.field,
        filterValue: column.filter,
        filterExpression: column.filterExpression,
        enableMultiSelectFilter: column.enableMultiSelectFilter
      };
    });

    return params;
  }

  /**
   * Trigger table data bind.
   * @param {boolean} hardRefresh Hard refresh if true.
   */
  private dataBind(hardRefresh: boolean): void {
    this.reloading = true;
    if (hardRefresh) {
      this.selectedRows = [];
      this.selectedRow = undefined;
      this.clearColumnFilters();
      this.resetColumnSortState();
      this.isHeardReload = true;
    }

    const dataTableParams = this.getDataTableParams(hardRefresh);

    if (this.persistTableState) {
      this.dataTableStateService.setState(this.id, dataTableParams);
    }

    if (hardRefresh) {
      this.onRefresh.emit(dataTableParams);
    } else {
      this.onDataLoad.emit(dataTableParams);
    }
  }

  public fetchData(hardRefresh: boolean = false): void {
    this.dataFetchStream.next(hardRefresh);
  }

  /**
   * Initialize debounce filter event associated subscriptions.
   */
  private initDebounceDefaultFilterEvent(): void {
    this.columnFilterSubscription = this.columnFilterStream
      .debounceTime(this.filterDebounceTime)
      .subscribe(() => {
        this.dataFetchStream.next(false);
      });
  }

  private initCustomFilterEvent(): void {
    this.customFilterSubscription = this.customFilterEventEmitter
      .subscribe((filterEventArgs: FilterEventArgs) => {
        filterEventArgs.column.filter = filterEventArgs.filter;
        this.dataFetchStream.next(false);
      });
  }

  private initRowSelectionEvent(): void {
    this.selectStateSubscription = this.rowSelectStateUpdate.subscribe(() => {
      this.dataRows.forEach((row) => {
        const newState = this.getRowSelectedState(row.item);
        if (row.selected !== newState) {
          row.selected = newState;
          this.onRowSelectChanged(row);
        }
      });
    });
  }

  /**
   * Fetch filter options from data provider.
   */
  private fetchFilterOptions(): void {
    this.columns.forEach((column) => {
      if (column.enableMultiSelectFilter) {
        this.setFilterOptions(column);
      }
    });
  }

  private initDataTableState(): void {
    if (this.persistTableState) {
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

        this._limit = dataTableState.limit;
        this._offset = dataTableState.offset;
      }
    }
  }

  /**
   * Lifecycle hook that is called after data-bound properties of a directive are initialized.
   */
  public ngOnInit(): void {
    this.initDefaultValues();
    this.initDefaultClickEvents();

    if (this.filterDebounce) {
      this.initDebounceDefaultFilterEvent();
    }

    this.initCustomFilterEvent();
    this.initRowSelectionEvent();
  }

  public ngAfterContentInit(): void {
    this.initDataTableState();

    this.dataFetchStream.debounceTime(20).subscribe((hardRefresh: boolean) => {
      this.dataBind(hardRefresh);
    });

    if (this.autoFetch) {
      this.dataFetchStream.next(false);
    }

    this.fetchFilterOptions();
    this.onInit.emit(this);
  }

  /**
   * Lifecycle hook that is called when a directive, pipe or service is destroyed.
   */
  public ngOnDestroy(): void {
    this.headerClickSubscription.unsubscribe();
    this.selectStateSubscription.unsubscribe();

    if (this.rowClickSubscription) {
      this.rowClickSubscription.unsubscribe();
    }

    if (this.filterDebounce) {
      this.columnFilterSubscription.unsubscribe();
      this.customFilterSubscription.unsubscribe();
    }
  }

  /**
   * Get row selected state.
   * @param item Data table row item object
   * @return {boolean} Selected state (true if selected).
   */
  public getRowSelectedState(item: any): boolean {
    const id = item[this.selectTrackBy];

    if (this.multiRowSelectable) {
      return this.selectedRows.indexOf(id) > -1;
    } else {
      return id === this.selectedRow;
    }
  }

  /**
   * Row clicked event handler.
   * @param {DataRow} row Data row object.
   * @param event Mouse click event argument object.
   */
  public rowClicked(row: DataRow, event: MouseEvent): void {
    this.onRowClick.emit({ row, event });
  }

  /**
   * Row double clicked event handler.
   * @param {DataRow} row Data row object.
   * @param {MouseEvent} event event Mouse click event argument object.
   */
  public rowDoubleClicked(row: DataRow, event: MouseEvent): void {
    this.onRowDoubleClick.emit({ row, event });
  }

  /**
   * Cell clicked event handler.
   * @param {DataTableColumnComponent} column Column data table component object.
   * @param {DataRow} row Data row object.
   * @param {MouseEvent} event event event Mouse click event argument object.
   */
  public cellClicked(column: DataTableColumnComponent, row: DataRow, event: MouseEvent): void {
    this.onCellClick.emit({ row, column, event });
  }

  /**
   * Header clicked handler.
   * @param {DataTableColumnComponent} column Column data table component object.
   * @param {MouseEvent} event event event Mouse click event argument object.
   */
  public headerClicked(column: DataTableColumnComponent, event: MouseEvent): void {
    if (!this.resizeInProgress) {
      this.onHeaderClick.emit({ column, event });
    } else {
      this.resizeInProgress = false; // this is because I can't prevent click from mousup of the drag end
    }
  }

  /**
   * Get new sort order upon sort click.
   * @return {SortOrder} New sort order enum value.
   */
  private getNewSortOrder(sortColumn: DataTableColumnComponent): SortOrder {
    let newSortOrder: SortOrder;
    switch (sortColumn.sortOrder) {
      case SortOrder.ASC:
        newSortOrder = SortOrder.DESC;
        break;
      case SortOrder.DESC:
        newSortOrder = SortOrder.NONE;
        break;
      case SortOrder.NONE:
        newSortOrder = SortOrder.ASC;
        break;
    }

    return newSortOrder;
  }

  /**
   * Sort column with new sort order.
   * @param {DataTableColumnComponent} column Data table column component.
   */
  private sortData(column: DataTableColumnComponent): void {
    if (column.sortable) {
      if (column.sortOrder) {
        column.sortOrder = this.getNewSortOrder(column);
      } else {
        if (!this.multiColumnSortable) {
          const sortColumns = this.getSortColumns();
          sortColumns.forEach((sortColumn: DataTableColumnComponent) => {
            if (sortColumn !== column) {
              sortColumn.sortOrder = SortOrder.NONE;
            }
          });
        }

        column.sortOrder = SortOrder.ASC;
      }

      this.dataFetchStream.next(false);
    }
  }

  /**
   * Get total column count.
   * Used for substitute row generation.
   * @return {number} Number of columns.
   */
  public get columnTotalCount(): number {
    let count = 0;
    count += this.indexColumnVisible ? 1 : 0;
    count += this.selectColumnVisible ? 1 : 0;
    count += this.expandColumnVisible ? 1 : 0;
    this.columns.toArray().forEach(column => {
      count += column.visible ? 1 : 0;
    });

    return count;
  }

  /**
   * Get substitute items.
   * @return {Array<any>} Empty array with remaining item count size.
   */
  public getSubstituteItems(): {}[] {
    return Array.from({ length: this.limit - this.items.length });
  }

  /**
   * On row selection change event.
   * Maintain selected row state.
   * @param {DataRow} row Data row object.
   */
  public onRowSelectChanged(row: DataRow): void {
    // maintain the selectedRow(s) in the view
    const id = row.item[this.selectTrackBy];

    const rowSelectEventArgs: RowSelectEventArgs = {
      row: row
    };

    if (this.multiRowSelectable) {
      const index = this.selectedRows.indexOf(id);
      if (row.selected && index < 0) {
        this.selectedRows.push(id);
      } else if (!row.selected && index >= 0) {
        this.selectedRows.splice(index, 1);
      }

      this._selectAllCheckbox = this.items.every((item: any) => {
        const itemIndex = item[this.selectTrackBy];
        return this.selectedRows.indexOf(itemIndex) > -1;
      });

      rowSelectEventArgs.selectedRows = this.selectedRows;
    } else {
      if (row.selected) {
        this.selectedRow = id;
      } else if (this.selectedRow === row) {
        this.selectedRow = undefined;
      }

      rowSelectEventArgs.selectedRow = this.selectedRow;
    }

    // unselect all other rows if not multi select.
    if (row.selected && !this.multiRowSelectable) {
      this.rowSelectStateUpdate.emit();
    }

    this.onRowSelectedStateChange.emit(rowSelectEventArgs);
  }

  /**
   * Resize column start.
   * @param {MouseEvent} event Mouse event argument object.
   * @param {DataTableColumnComponent} column Data table column component.
   * @param {HTMLElement} columnElement Column HTML element.
   */
  public resizeColumnStart(event: MouseEvent, column: DataTableColumnComponent, columnElement: HTMLTableHeaderCellElement) {
    this.resizeInProgress = true;

    this.dragAndDropService.drag(event, {
      move: (moveEvent: MouseEvent, dx: number) => {
        const newWidth = columnElement.offsetWidth + dx;
        if (column.resizeMinLimit !== undefined && newWidth < column.resizeMinLimit) {
          return;
        }

        column.actualWidth = newWidth;
        let totalWidth = 0;

        this.columns.forEach((col) => {
          col.width = col.actualWidth;
          totalWidth += col.width;
        });

        this.tableWidth = totalWidth;
      },
    });
  }

  /**
   * Get sort columns.
   * @returns {DataTableColumnComponent[]}
   */
  private getSortColumns(): DataTableColumnComponent[] {
    if (this.columns) {
      return this.columns.filter((column: DataTableColumnComponent) => {
        return column.sortable;
      });
    }

    return [];
  }

  /**
   * Reset column sort state.
   */
  private resetColumnSortState(): void {
    this.columns.forEach((column: DataTableColumnComponent) => {
      column.resetSortOrder();
    });
  }


  /**
   * Get column filters collection.
   * @return {DataTableColumnComponent[]} Column filters.
   */
  private getColumnFilterColumns(): DataTableColumnComponent[] {
    if (this.columns) {
      return this.columns.filter((column: DataTableColumnComponent) => {
        return column.filterable;
      });
    }

    return [];
  }

  /**
   * Clear applied column filters.
   */
  private clearColumnFilters(): void {
    this.columns.forEach((column: DataTableColumnComponent) => {
      column.filter = undefined;
    });
  }

  /**
   * Filter table data.
   */
  public filterData(): void {
    if (this.filterDebounce) {
      this.columnFilterStream.next();
    } else {
      this.dataFetchStream.next(false);
    }
  }

  /**
   * Get data item representing objects.
   * @return {DataRow[]} Data rows.
   */
  private getRows(): DataRow[] {
    return this.items.map((item: any, index: number) => {
      return {
        dataLoaded: false,
        expanded: false,
        disabled: false,
        colour: '',
        tooltip: '',
        index: index,
        item: item,
        selected: false
      };
    });
  }

  /**
   * Get loading status.
   * @return {boolean} True if loading.
   */
  public get isLoading(): boolean {
    return this.showLoadingSpinner && this.reloading;
  }

  /**
   * Show no data overlay status.
   * @return {boolean} Show overlay if true.
   */
  public get showNoDataOverlay(): boolean {
    return this.dataRows.length === 0 && !this.reloading;
  }

  /**
   * On element width initialize.
   * @param {number} width Element width.
   * @param {DataTableColumnComponent} column Data table column component.
   */
  public onElementWidthInit(width: number, column: DataTableColumnComponent) {
    column.actualWidth = width;
  }

  /**
   * Set filter options data.
   * user for multi select filter option.
   * @param {DataTableColumnComponent} column Data table column component object.
   */
  public setFilterOptions(column: DataTableColumnComponent): void {
    let filterOptions: Promise<any[]>;
    if (this.onFilterValueExtract) {
      filterOptions = this.onFilterValueExtract(column);
    }

    column.filterOptions = [];
    filterOptions.then((filterArgs: any[]) => {
      if (column.filterValueFormatter) {
        column.filterOptions = filterArgs.map((option: any, index: number) => {
          return column.filterValueFormatter(option, index);
        });
      } else {
        column.filterOptions = filterArgs.map((option: any) => {
          return {
            key: option,
            value: option
          };
        });
      }
    });
  }

  /**
   * Extract group row details.
   * @param {DataRow} row Data row.
   * @return {GroupDetail} Group detail object.
   */
  private extractGroupRowDetails(row: DataRow): GroupDetail {
    const rowGroups = this.onGroupFieldExtract(row);

    const maxRows = rowGroups.reduce((acc: number, value: any[]) => {
      return value ? Math.max(acc, value.length) : acc;
    }, 0) || 1;

    const groupHolder = Array.from({ length: maxRows });

    return {
      rowCount: maxRows,
      groups: rowGroups,
      groupHolder: groupHolder
    };
  }

  public getSortIconClass(column: DataTableColumnComponent) {
    return {
      'zmdi-sort-amount-asc': column.sortOrder === SortOrder.ASC,
      'zmdi-sort-amount-desc': column.sortOrder === SortOrder.DESC,
      'zmdi-format-line-spacing': column.sortOrder === undefined || column.sortOrder === SortOrder.NONE
    };
  }

  public hasFilterColumns(): boolean {
    return this.columns.some((column: DataTableColumnComponent) => column.filterable);
  }

  public onLimitChange(limit: number): void {
    this.limit = limit;
  }

  public onOffsetChange(offset): void {
    this.offset = offset;
  }

  public get headerPadding(): number {
    return this.contentHeight? this.globalRefService.scrollbarWidth: 0;
  }
}
