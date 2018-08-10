import { Component, ContentChild, Input, OnDestroy, OnInit, TemplateRef } from '@angular/core';

import { Subscription } from 'rxjs';

import { DataTableCellColorRenderCallback } from '../../models/data-table-cell-color-render-callback.model';
import { DataTableRow } from '../../models/data-table-row.model';
import { DataTableFilterFieldMapperCallback } from '../../models/data-table-filter-field-mapper-callback.model';
import { DataTableFilterExpressionCallback } from '../../models/data-table-filter-expression-callback.model';

import { DropdownSelectMode } from '../../../dropdown/dropdown.module';
import { DataTableSortOrder } from '../../models/data-table-sort-order.enum';

import { DataTableConfigService } from '../../services/data-table-config.service';
import { DataTableEventStateService } from '../../services/data-table-event.service';
import { ViewPosition } from '../../../utility/models/view-position.model';

/**
 * Data table column component.
 * @class DataTableColumnComponent
 */
@Component({
  selector: 'ng-data-table-column',
  template: ''
})
export class DataTableColumnComponent implements OnInit, OnDestroy {
  private filterValueExtractorSubscription: Subscription;

  private _sortOrder: DataTableSortOrder = DataTableSortOrder.NONE;
  private _baseSortOrder: DataTableSortOrder;

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
   * Filter expression callback function.
   * @type DataTableFilterExpressionCallback
   */
  @Input()
  public filterExpression: DataTableFilterExpressionCallback;

  /**
   * Custom filter field mapper.
   * Used to extract filter field when showDropdownFilter option is true.
   * @type DataTableFilterFieldMapperCallback
   */
  @Input()
  public filterFieldMapper: DataTableFilterFieldMapperCallback;

  /**
   * Cell color render event handler callback function.
   * @type DataTableCellColorRenderCallback
   */
  @Input()
  public onCellColorRender: DataTableCellColorRenderCallback<any>;

  // Inputs

  /**
   * Column title.
   * @type string
   */
  @Input()
  public title: string;

  /**
   * Sortable state.
   * @type boolean
   */
  @Input()
  public sortable = false;

  /**
   * Set Data sort oder.
   * @type DataTableSortOrder
   */
  @Input()
  public set sortOrder(value: DataTableSortOrder) {
    this._sortOrder = value;
    this._baseSortOrder = value;
  }

  /**
   * Get data sort order.
   * @returns {DataTableSortOrder}
   */
  public get sortOrder(): DataTableSortOrder {
    return this._sortOrder;
  }

  /**
   * Filterable state.
   * @type boolean
   */
  @Input()
  public filterable = false;

  /**
   * Resizeable state.
   * @type boolean
   */
  @Input()
  public resizable = false;

  /**
   * Data table item mapping field name.
   * @type string
   */
  @Input()
  public field: string;

  /**
   * Filter field identifier.
   * Fallback to field if not provided.
   * @type string
   */
  @Input()
  public filterField: string;

  /**
   * Sort field identifier.
   * Fallback to field if not provided.
   * @type string
   */
  @Input()
  public sortField: string;

  /**
   * Column title space separated CSS class names.
   * @type string
   */
  @Input()
  public cssClass: string;

  /**
   * Column width.
   * @type string | number
   */
  @Input()
  public width: number | string;

  /**
   * Visible state.
   * @type boolean
   */
  @Input()
  public visible = true;

  /**
   * Show filed in column selector.
   * @type {boolean}
   */
  @Input()
  public showInColumnSelector = true;

  /**
   * Filter placeholder value.
   * @type string
   */
  @Input()
  public filterPlaceholder = '';

  /**
   * Filter value.
   * @type any
   */
  @Input()
  public filter: any;

  @Input()
  public showFilterClearButton: any;

  /**
   * Resize minimum limit.
   * @type number
   */
  @Input()
  public resizeMinLimit: number;

  /**
   * Enable multi select filtering.
   * Show multi select dropdown for filtering.
   * @type boolean
   */
  @Input()
  public showDropdownFilter: boolean;

  /**
   * Dropdown filter menu position.
   * @type ViewPosition
   */
  @Input()
  public dropdownFilterMenuPosition: ViewPosition;

  /**
   * Dropdown filter multi selectable state.
   * @type boolean
   */
  @Input()
  public dropdownFilterSelectMode: DropdownSelectMode;

  /**
   * Dropdown filter searchable state.
   * @type boolean
   */
  @Input()
  public dropdownFilterSearchable: boolean;

  /**
   * Dropdown filter search debounce time.
   * @type number
   */
  @Input()
  public dropdownFilterSearchDebounceTime: number;

  /**
   * Dropdown filter  search debounced.
   * @type boolean
   */
  @Input()
  public dropdownFilterSearchDebounce: boolean;

  /**
   * Dropdown filter show select all checkbox.
   * @type boolean
   */
  @Input()
  public dropdownFilterShowSelectAll: boolean;

  /**
   * Dropdown filter show option select checkbox.
   * @type boolean
   */
  @Input()
  public dropDownFilterShowOptionSelectCheckbox: boolean;

  /**
   * Dropdown filter selected items display limit.
   * @type number
   */
  @Input()
  public dropdownFilterWrapDisplaySelectLimit: number;

  /**
   * Dropdown filter group by field.
   * @type string
   */
  @Input()
  public dropdownFilterGroupByField: string;

  /**
   * Dropdown filter show selected option remove button.
   * @type boolean
   */
  @Input()
  public dropdownFilterShowSelectedOptionRemoveButton: boolean;

  /**
   * Dropdown filter show selected option remove button.
   * @type boolean
   */
  @Input()
  public dropdownFilterShowClearSelectionButton: boolean;

  /**
   * Dropdown filter drop menu width.
   * @type number
   */
  @Input()
  public dropdownFilterMenuWidth: number;

  /**
   * Dropdown filter drop menu height.
   * @type number
   */
  @Input()
  public dropdownFilterMenuHeight: number;

  @Input()
  public dropdownFilterMultiSelectOptionMaxWidth: number;

  @Input()
  public dropdownFilterCloseMenuOnSelect: boolean;

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
  }

  public resetSortOrder(): void {
    this._sortOrder = this._baseSortOrder;
  }

  /**
   * Get cell color.
   * @param {DataTableRow} row Data row object.
   * @return {string} Cell color string.
   */
  public getCellColor(row: DataTableRow<any>) {
    if (this.onCellColorRender !== undefined) {
      return this.onCellColorRender(row, this);
    }
  }

  /**
   * Get new sort order upon sort click.
   * @return {DataTableSortOrder} New sort order enum value.
   */
  public getNewSortOrder(): DataTableSortOrder {
    let newSortOrder: DataTableSortOrder;
    switch (this.sortOrder) {
      case DataTableSortOrder.ASC:
        newSortOrder = DataTableSortOrder.DESC;
        break;
      case DataTableSortOrder.DESC:
        newSortOrder = DataTableSortOrder.NONE;
        break;
      case DataTableSortOrder.NONE:
        newSortOrder = DataTableSortOrder.ASC;
        break;
    }

    return newSortOrder;
  }

  public getSortIconClass() {
    return {
      'sort-asc': this.sortOrder === DataTableSortOrder.ASC,
      'sort-dsc': this.sortOrder === DataTableSortOrder.DESC,
      'sort-reset': this.sortOrder === undefined || this.sortOrder === DataTableSortOrder.NONE
    };
  }

  public ngOnDestroy(): void {
    if (this.filterValueExtractorSubscription) {
      this.filterValueExtractorSubscription.unsubscribe();
    }
  }

  /**
   * Lifecycle hook that is called after data-bound properties of a directive are initialized.
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
