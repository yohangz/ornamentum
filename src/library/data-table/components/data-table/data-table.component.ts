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
  AfterContentInit, forwardRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

import { SortOrder } from '../../models/sort-order.enum';
import { FilterValueExtractCallback } from '../../models/filter-value-extract-callback.model';
import { StorageMode } from '../../models/storage-mode.enum';
import { DataTableConfigService } from '../../services/data-table-config.service';
import { CellBindEventArgs } from '../../models/cell-bind-event-args.model';
import { CellClickEventArgs } from '../../models/cell-click-event-args.model';
import { HeaderClickEventArgs } from '../../models/header-click-event-args.model';
import { DoubleClickEventArgs } from '../../models/double-click-event-args.model';
import { RowClickEventArgs } from '../../models/row-click-event-args.model';
import { DataRow } from '../../models/data-row.model';
import { DataTableParams } from '../../models/data-table-params.model';
import { DataTableTranslations } from '../../models/data-tabl-translations.model';
import { GroupFieldExtractorCallback } from '../../models/group-field-extractor-callback.model';

import { DataTableColumnComponent } from '../data-table-column/data-table-column.component';

import { DataTablePersistenceService } from '../../services/data-table-persistence.service';

import { DragAndDropService, GlobalRefService } from '../../../utility';
import { DataTableEventStateService } from '../../services/data-table-event.service';
import { DataTableDataStateService } from '../../services/data-table-data-state.service';

/**
 * Data table component.
 * @class DataTableComponent
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
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DataTableComponent),
      multi: true
    }
  ]
})
export class DataTableComponent implements OnDestroy, AfterContentInit, ControlValueAccessor {
  public SortOrder = SortOrder;

  private isHeardReload = false;

  public scrollPositionStream = new Subject();

  private rowSelectChangeSubscription: Subscription;

  @ContentChildren(DataTableColumnComponent)
  public columns: QueryList<DataTableColumnComponent>;

  @ContentChild('ngDataTableExpand')
  public expandTemplate: TemplateRef<any>;

  /**
   * Template to display when data set is empty.
   * @type TemplateRef
   */
  @ContentChild('appDataTableNoRecords')
  public noRecordsTemplate: TemplateRef<any>;

  // Event handlers

  /**
   * On data table init event handler.
   * @type {EventEmitter<DataTableComponent>}
   */
  @Output()
  public init = new EventEmitter<DataTableComponent>();

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
  public rowClick: EventEmitter<RowClickEventArgs>;

  /**
   * On row double click event handler.
   * @type {EventEmitter<any>}
   */
  @Output()
  public rowDoubleClick: EventEmitter<DoubleClickEventArgs>;

  /**
   * On header click event handler.
   * @type {EventEmitter<any>}
   */
  @Output()
  public headerClick: EventEmitter<HeaderClickEventArgs>;

  @Output()
  public allRowSelectChange: EventEmitter<boolean>;

  /**
   * On cell click event handler.
   * @type {EventEmitter<any>}
   */
  @Output()
  public cellClick = new EventEmitter<CellClickEventArgs>();

  /**
   * On data load event handler.
   * Fired on each data fetch request. But not on hard reload.
   * @type {EventEmitter<DataTableParams>}
   */
  @Output()
  public dataLoad = new EventEmitter<DataTableParams>();

  /**
   * On refresh event handler.
   * Fired on hard reload button click.
   * @type {EventEmitter<DataTableParams>}
   */
  @Output()
  public refresh = new EventEmitter<DataTableParams>();

  /**ss
   * On row bind event handler.
   * @type {EventEmitter<DataRow>}
   */
  @Output()
  public rowBind: EventEmitter<DataRow>;

  /**
   * On cell bind event handler.
   * @type {EventEmitter<CellBindEventArgs>}
   */
  @Output()
  public cellBind = new EventEmitter<CellBindEventArgs>();

  // Input Events

  /**
   * On filter value extract event handler callback.
   * @type {FilterValueExtractCallback}
   */
  @Input()
  public onFilterValueExtract: FilterValueExtractCallback;

  /**
   * On group field extract event handler callback.
   * @type {GroupFieldExtractorCallback}
   */
  @Input()
  public set onGroupFieldExtract(value: GroupFieldExtractorCallback) {
    this.dataStateService.onGroupFieldExtract = value;
  }

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
  public set persistTableState(value: boolean) {
    this.config.persistTableState = value;
  }

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
    this.config.expandableRows = value;
  }

  /**
   * Auto dataLoad on init.
   * @type {boolean}
   */
  @Input()
  public autoFetch: boolean;

  /**
   * Show loading spinner.
   * @type {boolean}
   */
  @Input()
  public showLoadingSpinner: boolean;

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
   * Total item count in data source.
   * @type {number}
   */
  @Input()
  public set itemCount(value: number) {
    this.dataStateService.itemCount = value;
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
   * Set data table items array.
   * @param {any[]} value
   */
  @Input()
  public set items(value: any[]) {
    if (!value) {
      return;
    }

    this.onAfterDataBind(value);
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

  constructor(private dragAndDropService: DragAndDropService,
              private dataTableStateService: DataTablePersistenceService,
              private globalRefService: GlobalRefService,
              private eventStateService: DataTableEventStateService,
              public dataStateService: DataTableDataStateService,
              public config: DataTableConfigService) {
    this.storageMode = config.storageMode;

    this.autoFetch = config.autoFetch;
    this.showLoadingSpinner = config.showLoadingSpinner;

    this.headerClick = this.eventStateService.headerClickStream;
    this.allRowSelectChange = this.eventStateService.allRowSelectChangeStream;
    this.rowBind = this.eventStateService.rowBind;
    this.rowClick = this.eventStateService.rowClick;
    this.rowDoubleClick = this.eventStateService.rowDoubleClick;
    this.rowSelectChange = this.eventStateService.rowSelectChangeStream;
  }

  /**
   * On after data bind handler.
   */
  private onAfterDataBind(items: any[]): void {
    this.setDataRows(items);
    this.dataStateService.allRowSelected = false;
    this.setRowSelectState();

    if (this.config.offset > this.dataStateService.itemCount) {
      this.config.offset = 0;
    }

    if (this.isHeardReload) {
      this.fetchFilterOptions();
      this.isHeardReload = false;
    }

    setTimeout(() => {
      this.dataStateService.dataLoading = false;
    }, 500);
  }

  public setRowSelectState(): void {
    this.dataStateService.dataRows.forEach(row => {
      const id = row.item[this.config.selectTrackBy];
      if (this.config.multiRowSelectable) {
        const index = this.dataStateService.selectedRows.indexOf(id);
        row.selected = index > -1;
      } else {
        row.selected = this.dataStateService.selectedRow === id;
      }
    });

    this.dataStateService.allRowSelected = this.dataStateService.dataRows.every((dataRow: DataRow) => {
      return dataRow.selected;
    });
  }

  /**
   * Get data table params.
   * @param {boolean} resetOffset Reset the offset of true.
   * @return {DataTableParams} Data table parameters.
   */
  private getDataTableParams(resetOffset: boolean): DataTableParams {
    const params = <DataTableParams>{};

    if (resetOffset) {
      this.config.offset = 0;
    }

    if (this.columns) {
      params.sortColumns = this.columns.filter(column => column.sortable)
        .map((column: DataTableColumnComponent) => {
          return {
            field: column.field,
            sortOrder: column.sortOrder,
            comparator: column.sortComparatorExpression
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

    return params;
  }

  /**
   * Trigger table data bind.
   * @param {boolean} hardRefresh Hard refresh if true.
   */
  public dataBind(hardRefresh: boolean): void {
    this.dataStateService.dataLoading = true;
    if (hardRefresh) {
      this.selectedRows = [];
      this.selectedRow = undefined;
      this.clearColumnFilters();
      this.resetColumnSortState();
      this.isHeardReload = true;
    }

    const dataTableParams = this.getDataTableParams(hardRefresh);

    if (this.config.persistTableState) {
      this.dataTableStateService.setState(this.id, dataTableParams);
    }

    if (hardRefresh) {
      this.refresh.emit(dataTableParams);
    } else {
      this.dataLoad.emit(dataTableParams);
    }
  }

  /**
   * Fetch filter options from data provider.
   */
  private fetchFilterOptions(): void {
    this.columns.forEach((column) => {
      if (column.showDropdownFilter) {
        this.setFilterOptions(column);
      }
    });
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

    this.eventStateService.dataFetchStream.debounceTime(20).subscribe((hardRefresh: boolean) => {
      this.dataBind(hardRefresh);
    });

    if (this.autoFetch) {
      this.eventStateService.dataFetchStream.next(false);
    }

    this.fetchFilterOptions();
    this.init.emit(this);
  }

  /**
   * Lifecycle hook that is called when a directive, pipe or service is destroyed.
   */
  public ngOnDestroy(): void {
    this.rowSelectChangeSubscription.unsubscribe();
  }

  /**
   * Cell clicked event handler.
   * @param {DataTableColumnComponent} column Column data table component object.
   * @param {DataRow} row Data row object.
   * @param {MouseEvent} event event event Mouse click event argument object.
   */
  public cellClicked(column: DataTableColumnComponent, row: DataRow, event: MouseEvent): void {
    this.cellClick.emit({row, column, event});
  }

  /**
   * Get total column count.
   * Used for substitute row generation.
   * @return {number} Number of columns.
   */
  public get columnTotalCount(): number {
    let count = 0;
    count += this.config.showIndexColumn ? 1 : 0;
    count += this.config.rowSelectable ? 1 : 0;
    count += this.config.expandableRows ? 1 : 0;
    this.columns.toArray().forEach(column => {
      count += column.visible ? 1 : 0;
    });

    return count;
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
   * Clear applied column filters.
   */
  private clearColumnFilters(): void {
    this.columns.forEach((column: DataTableColumnComponent) => {
      column.filter = undefined;
    });
  }

  /**
   * Get data item representing objects.
   * @return {DataRow[]} Data rows.
   */
  private setDataRows(items: any[]): void {
    this.dataStateService.dataRows = items.map((item: any, index: number) => {
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

    const substituteRowCount = this.config.limit - this.dataStateService.dataRows.length;
    this.dataStateService.substituteRows = Array.from({length: substituteRowCount});
  }

  /**
   * Get loading status.
   * @return {boolean} True if loading.
   */
  public get isLoading(): boolean {
    return this.showLoadingSpinner && this.dataStateService.dataLoading;
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

  public get headerPadding(): number {
    return this.config.contentHeight ? this.globalRefService.scrollbarWidth : 0;
  }

  public fetchData(hardRefresh: boolean = false): void {
    this.eventStateService.dataFetchStream.next(hardRefresh);
  }

  public writeValue(value: any): void {
    if (!value) {
      return;
    }

    this.selectedRows = this.selectedRow = value;
  }

  public registerOnChange(onSelectChange: (value: any) => void): void {
    this.rowSelectChangeSubscription = this.eventStateService.rowSelectChangeStream.subscribe((selectedIds: any | any[]) => {
      onSelectChange(selectedIds);
    });
  }

  public registerOnTouched(fn: any): void {
  }
}
