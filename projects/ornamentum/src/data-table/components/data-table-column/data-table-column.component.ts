import { Component, ContentChild, Input, OnDestroy, OnInit, TemplateRef } from '@angular/core';

import { Subscription } from 'rxjs';

import { DataTableCellColorRenderCallback } from '../../models/data-table-cell-color-render-callback.model';
import { DataTableRow } from '../../models/data-table-row.model';
import { DataTableFilterFieldMapperCallback } from '../../models/data-table-filter-field-mapper-callback.model';
import { DataTableFilterExpressionCallback } from '../../models/data-table-filter-expression-callback.model';

import { DropdownSelectMode } from '../../../dropdown/dropdown.module';
import { DataTableSortOrder } from '../../models/data-table-sort-order.model';

import { DataTableConfigService } from '../../services/data-table-config.service';
import { DataTableEventStateService } from '../../services/data-table-event.service';
import { ViewPosition } from '../../../utility/models/view-position.model';

/**
 * Data table column component
 */
@Component({
  selector: 'ng-data-table-column',
  template: ''
})
export class DataTableColumnComponent implements OnInit, OnDestroy {
  private filterValueExtractorSubscription: Subscription;

  private _sortOrder: DataTableSortOrder = '';
  private _baseSortOrder: DataTableSortOrder = '';

  public actualWidth: number;

  // Content Child Properties

  @ContentChild('ngDataTableCell')
  public cellTemplate: TemplateRef<any>;

  @ContentChild('ngDataTableHeader')
  public headerTemplate: TemplateRef<any>;

  @ContentChild('ngDataTableFilter')
  public filterTemplate: TemplateRef<any>;

  // Callback event handlers

  /**
   * Filter expression callback function
   * @type {DataTableFilterExpressionCallback}
   */
  @Input()
  public filterExpression: DataTableFilterExpressionCallback;

  /**
   * Custom filter field mapper; Used to extract filter field when showDropdownFilter option is true
   * @type {DataTableFilterFieldMapperCallback}
   */
  @Input()
  public filterFieldMapper: DataTableFilterFieldMapperCallback;

  /**
   * Cell color render event handler callback function
   * @type {DataTableCellColorRenderCallback}
   */
  @Input()
  public onCellColorRender: DataTableCellColorRenderCallback<any>;

  // Inputs

  /**
   * Column title
   * @type {string}
   */
  @Input()
  public title: string;

  /**
   * Columns sortable if true; Show sort indicator on column title
   * @type {boolean}
   */
  @Input()
  public sortable = false;

  /**
   * Set initial column sort order
   * @param value Data sort order
   */
  @Input()
  public set sortOrder(value: DataTableSortOrder) {
    this._sortOrder = value;
    this._baseSortOrder = value;
  }

  /**
   * Get initial column sort order
   * @return Data sort order
   */
  public get sortOrder(): DataTableSortOrder {
    return this._sortOrder;
  }

  /**
   * Column filterable if true; Show filter options bar when enabled
   * @type {boolean}
   */
  @Input()
  public filterable = false;

  /**
   * Column resizeable if true; Show column resize indicator on column right corner
   * @type {boolean}
   */
  @Input()
  public resizable = false;

  /**
   * Data table item mapping field name
   * @type {string}
   */
  @Input()
  public field: string;

  /**
   * Filter field identifier; Fallback to field if not provided
   * @type {string}
   */
  @Input()
  public filterField: string;

  /**
   * Sort field identifier; Fallback to field if not provided
   * @type {string}
   */
  @Input()
  public sortField: string;

  /**
   * Column title space separated CSS class names
   * @type {string}
   */
  @Input()
  public cssClass: string;

  /**
   * Column width
   * @type {string|number}
   */
  @Input()
  public width: number | string;

  /**
   * Render column if true
   * @type {boolean}
   */
  @Input()
  public visible = true;

  /**
   * Show filed in column selector
   * @type {boolean}
   */
  @Input()
  public showInColumnSelector = true;

  /**
   * Filter placeholder value
   * @type {string}
   */
  @Input()
  public filterPlaceholder = '';

  /**
   * Applied filter value
   * @type {any}
   */
  @Input()
  public filter: any;

  /**
   * Show filter clear button if true; Applicable only for none dropdown filter mode
   * @type {boolean}
   */
  @Input()
  public showFilterClearButton: any;

  /**
   * Resize minimum limit
   * @type {number}
   */
  @Input()
  public resizeMinLimit: number;

  /**
   * Show dropdown filter if true
   * @type {boolean}
   */
  @Input()
  public showDropdownFilter: boolean;

  /**
   * Dropdown filter menu position; Applicable only when showDropdownFilter is true
   * @type {ViewPosition}
   */
  @Input()
  public dropdownFilterMenuPosition: ViewPosition;

  /**
   * Dropdown select mode; Applicable only when showDropdownFilter is true
   * @type {boolean}
   */
  @Input()
  public dropdownFilterSelectMode: DropdownSelectMode;

  /**
   * Dropdown filter searchable if true; Show dropdown filter search input
   * @type {boolean}
   */
  @Input()
  public dropdownFilterSearchable: boolean;

  /**
   * Dropdown filter search debounce time in milliseconds; Applicable only when dropdownFilterSearchDebounce is true
   * @type {number}
   */
  @Input()
  public dropdownFilterSearchDebounceTime: number;

  /**
   * Enable dropdown filter data search debounce with provided dropdownFilterSearchDebounceTime if true
   * @type {boolean}
   */
  @Input()
  public dropdownFilterSearchDebounce: boolean;

  /**
   * Dropdown filter show option select checkbox
   * @type {boolean}
   */
  @Input()
  public dropDownFilterShowOptionSelectCheckbox: boolean;

  /**
   * Dropdown filter selected items display limit
   * @type {number}
   */
  @Input()
  public dropdownFilterWrapDisplaySelectLimit: number;

  /**
   * Dropdown filter group by field name in item schema
   * @type {string}
   */
  @Input()
  public dropdownFilterGroupByField: string;

  /**
   * Dropdown filter show selected option remove button if true
   * @type {boolean}
   */
  @Input()
  public dropdownFilterShowSelectedOptionRemoveButton: boolean;

  /**
   * Dropdown filter show all select options clear button if true
   * @type {boolean}
   */
  @Input()
  public dropdownFilterShowClearSelectionButton: boolean;

  /**
   * Dropdown filter menu width in pixels
   * @type {number}
   */
  @Input()
  public dropdownFilterMenuWidth: number;

  /**
   * Dropdown filter menu height in pixels
   * @type {number}
   */
  @Input()
  public dropdownFilterMenuHeight: number;

  /**
   * Dropdown filter multi select option max width
   * @type {number}
   */
  @Input()
  public dropdownFilterMultiSelectOptionMaxWidth: number;

  /**
   * Dropdown filter close menu on select if true
   * @type {boolean}
   */
  @Input()
  public dropdownFilterCloseMenuOnSelect: boolean;

  /**
   * Dynamically calculate Dropdown filter menu dimensions relative to column width; dropdownFilterMenuWidth and
   * dropdownFilterMenuHeight configuration are ignored when true
   * @type {boolean}
   */
  @Input()
  public dropdownFilterDynamicDimensionCalculation: boolean;

  /**
   * Dynamic dropdown view width ratio; Used for dynamic dimension calculation
   * @type {number}
   */
  @Input()
  public dropdownFilterDynamicWidthRatio: number;

  /**
   * Dynamic dropdown view height ratio; Used for dynamic dimension calculation
   * @type {number}
   */
  @Input()
  public dropdownFilterDynamicHeightRatio: number;

  constructor(private dataTableConfigService: DataTableConfigService,
              private eventStateService: DataTableEventStateService) {
    // Table column config
    this.sortable = dataTableConfigService.sortable;
    this._sortOrder = dataTableConfigService.sortOrder;
    this.filterable = dataTableConfigService.filterable;
    this.filterPlaceholder = dataTableConfigService.filterPlaceholder;
    this.resizable = dataTableConfigService.columnResizable;
    this.visible = dataTableConfigService.columnVisible;
    this.showDropdownFilter = dataTableConfigService.showDropdownFilter;
    this.showFilterClearButton = dataTableConfigService.showFilterClearButton;

    // Dropdown filter config
    this.dropdownFilterMenuPosition = dataTableConfigService.dropdownFilterMenuPosition;
    this.dropdownFilterSelectMode = dataTableConfigService.dropdownFilterSelectMode;
    this.dropdownFilterSearchable = dataTableConfigService.dropdownFilterSearchable;
    this.dropdownFilterSearchDebounceTime = dataTableConfigService.dropdownFilterSearchDebounceTime;
    this.dropdownFilterSearchDebounce = dataTableConfigService.dropdownFilterSearchDebounce;
    this.dropdownFilterWrapDisplaySelectLimit = dataTableConfigService.dropdownFilterWrapDisplaySelectLimit;
    this.dropdownFilterGroupByField = dataTableConfigService.dropdownFilterGroupByField;
    this.dropdownFilterShowSelectedOptionRemoveButton = dataTableConfigService.dropdownFilterShowSelectedOptionRemoveButton;
    this.dropdownFilterShowClearSelectionButton = dataTableConfigService.dropdownFilterShowClearSelectionButton;
    this.dropdownFilterMenuWidth = dataTableConfigService.dropdownFilterMenuWidth;
    this.dropdownFilterMenuHeight = dataTableConfigService.dropdownFilterMenuHeight;
    this.dropdownFilterMultiSelectOptionMaxWidth = dataTableConfigService.dropdownFilterMultiSelectOptionMaxWidth;
    this.dropdownFilterCloseMenuOnSelect = dataTableConfigService.dropdownFilterCloseMenuOnSelect;
    this.dropdownFilterDynamicDimensionCalculation = dataTableConfigService.dropdownFilterDynamicDimensionCalculation;
    this.dropdownFilterDynamicWidthRatio = dataTableConfigService.dropdownFilterDynamicWidthRatio;
    this.dropdownFilterDynamicHeightRatio = dataTableConfigService.dropdownFilterDynamicHeightRatio;
  }

  /**
   * Reset data sort order
   */
  public resetSortOrder(): void {
    this._sortOrder = this._baseSortOrder;
  }

  /**
   * Get dynamic cell color
   * @param row Data row object
   * @return Cell color string
   */
  public getCellColor(row: DataTableRow<any>) {
    if (this.onCellColorRender !== undefined) {
      return this.onCellColorRender(row, this);
    }
  }

  /**
   * Get new sort order upon sort click
   * @return New sort order enum value
   */
  public getNewSortOrder(): DataTableSortOrder {
    let newSortOrder: DataTableSortOrder;
    switch (this.sortOrder) {
      case 'asc':
        newSortOrder = 'desc';
        break;
      case 'desc':
        newSortOrder = '';
        break;
      case '':
        newSortOrder = 'asc';
        break;
    }

    return newSortOrder;
  }

  /**
   * Get current sort state icon css class enabled state
   * @return Sort order icon css class collection object
   */
  public getSortIconClass(): any {
    return {
      'sort-asc': this.sortOrder === 'asc',
      'sort-dsc': this.sortOrder === 'desc',
      'sort-reset': !this.sortOrder
    };
  }

  /**
   * Component destroy lifecycle event handler
   */
  public ngOnDestroy(): void {
    if (this.filterValueExtractorSubscription) {
      this.filterValueExtractorSubscription.unsubscribe();
    }
  }

  /**
   * Component initialize lifecycle event handler
   */
  public ngOnInit(): void {
    if (!this.cssClass && this.field) {
      if (/^[a-zA-Z0-9_]+$/.test(this.field)) {
        this.cssClass = 'column-' + this.field;
      } else {
        this.cssClass = 'column-' + this.field.replace(/[^a-zA-Z0-9_]/g, '');
      }
    }

    this.eventStateService.columnBind.emit(this);
  }
}
