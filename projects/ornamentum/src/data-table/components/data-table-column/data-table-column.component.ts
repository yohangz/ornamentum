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
import { DataTableDataStateService } from '../../services/data-table-data-state.service';

/**
 * Data table column component; Data table columns associated data is captured via this component
 */
@Component({
  selector: 'ng-data-table-column',
  template: ''
})
export class DataTableColumnComponent implements OnInit, OnDestroy {
  private filterValueExtractorSubscription: Subscription;

  private currentSortOrder: DataTableSortOrder = '';
  private baseSortOrder: DataTableSortOrder = '';

  public actualWidth: number;

  // Content Child Properties

  @ContentChild('ngDataTableCell', { static: true })
  public cellTemplate: TemplateRef<any>;

  @ContentChild('ngDataTableHeader', { static: true })
  public headerTemplate: TemplateRef<any>;

  @ContentChild('ngDataTableFilter', { static: true })
  public filterTemplate: TemplateRef<any>;

  @ContentChild('ngFilterDropdownLoadingSpinner', { static: true })
  public dropdownFilterLoadingSpinnerTemplate: TemplateRef<any>;

  @ContentChild('ngFilterDropdownOption', { static: true })
  public dropdownFilterOptionTemplate: TemplateRef<any>;

  @ContentChild('ngFilterDropdownOptionGroupHeader', { static: true })
  public dropdownFilterOptionGroupHeaderTemplate: TemplateRef<any>;

  // Callback event handlers

  /**
   * Filter expression callback function; Used to apply custom data filter expression logic
   */
  @Input()
  public filterExpression: DataTableFilterExpressionCallback;

  /**
   * Custom filter field mapper; Used to extract filter field when showDropdownFilter option is true
   */
  @Input()
  public filterFieldMapper: DataTableFilterFieldMapperCallback;

  /**
   * Cell color render event handler callback function
   */
  @Input()
  public onCellColorRender: DataTableCellColorRenderCallback<any>;

  // Inputs

  /**
   * Column title
   */
  @Input()
  public title: string;

  /**
   * Columns sortable if true; Show sort indicator on column title
   */
  @Input()
  public sortable: boolean;

  /**
   * Multi column sort priority. Lowest number will get the height precedence. Usage of same precedence number in multiple columns may lead
   * to unexpected behaviors. This priority number will be displayed in the column header when multi column sorting is enabled; hence,
   * consider indexing accordingly.
   */
  @Input()
  public sortPriority: number;

  /**
   * Set initial column sort order
   */
  @Input()
  public set sortOrder(value: DataTableSortOrder) {
    this.currentSortOrder = value;
    this.baseSortOrder = value;
  }

  /**
   * Get initial column sort order
   * @return Data sort order
   */
  public get sortOrder(): DataTableSortOrder {
    return this.currentSortOrder;
  }

  /**
   * Column filterable if true; Show filter options on filter header row when enabled
   */
  @Input()
  public filterable: boolean;

  /**
   * Column resizeable if true; Show column resize indicator on column right corner
   */
  @Input()
  public resizable: boolean;

  /**
   * Data item mapping field name
   */
  @Input()
  public field: string;

  /**
   * Filter field identifier; Fallback to field if not provided
   */
  @Input()
  public filterField: string;

  /**
   * Sort field identifier; Fallback to field if not provided
   */
  @Input()
  public sortField: string;

  /**
   * Column title CSS class names; Use space delimiter to separate class names
   */
  @Input()
  public cssClass: string;

  /**
   * Column width
   */
  @Input()
  public width: number | string;

  /**
   * Render column if true; Else include in column selector but not rendered
   */
  @Input()
  public visible: boolean;

  /**
   * Show filed in column selector popup if true
   */
  @Input()
  public showInColumnSelector = true; // TODO: move to base conf

  /**
   * Filter placeholder value; Placeholder text to show on filter text box; Applicable only for none dropdown filter mode
   */
  @Input()
  public filterPlaceholder: string;

  /**
   * Applied filter value on initialize
   */
  @Input()
  public filter: any;

  /**
   * Show filter clear button if true; Applicable only for none dropdown filter mode
   */
  @Input()
  public showFilterClearButton: any;

  /**
   * Resize minimum limit; Column cannot be resized to fit less than the number of pixels specified here
   */
  @Input()
  public resizeMinLimit: number;

  // Dropdown filter properties

  /**
   * Show dropdown filter if true; Filter data using dropdown filter
   */
  @Input()
  public showDropdownFilter: boolean;

  /**
   * Dropdown filter menu position; Placement of filter popup menu
   */
  @Input()
  public dropdownFilterMenuPosition: ViewPosition;

  /**
   * Dropdown select mode; Filter option select mode
   */
  @Input()
  public dropdownFilterSelectMode: DropdownSelectMode;

  /**
   * Dropdown filter searchable if true; Display search box within filter option menu
   */
  @Input()
  public dropdownFilterSearchable: boolean;

  /**
   * Dropdown filter search debounce time in milliseconds; Applicable only when dropdownFilterSearchDebounce is true
   */
  @Input()
  public dropdownFilterSearchDebounceTime: number;

  /**
   * Enable dropdown filter data search debounce with provided dropdownFilterSearchDebounceTime if true
   */
  @Input()
  public dropdownFilterSearchDebounce: boolean;

  /**
   * Dropdown filter show option select checkbox
   */
  @Input()
  public dropDownFilterShowOptionSelectCheckbox: boolean;

  /**
   * Dropdown filter selected items display limit
   */
  @Input()
  public dropdownFilterWrapDisplaySelectLimit: number;

  /**
   * Dropdown filter group by field name in item schema
   */
  @Input()
  public dropdownFilterGroupByField: string;

  /**
   * Dropdown filter show selected option remove button if true
   */
  @Input()
  public dropdownFilterShowSelectedOptionRemoveButton: boolean;

  /**
   * Dropdown filter show all select options clear button if true
   */
  @Input()
  public dropdownFilterShowClearSelectionButton: boolean;

  /**
   * Dropdown filter menu width in pixels
   */
  @Input()
  public dropdownFilterMenuWidth: number;

  /**
   * Dropdown filter menu height in pixels
   */
  @Input()
  public dropdownFilterMenuHeight: number;

  /**
   * Dropdown filter multi select option max width
   */
  @Input()
  public dropdownFilterMultiSelectOptionMaxWidth: number;

  /**
   * Dropdown filter close menu on select if true
   */
  @Input()
  public dropdownFilterCloseMenuOnSelect: boolean;

  /**
   * Dynamically calculate Dropdown filter menu dimensions relative to column width; dropdownFilterMenuWidth and
   * dropdownFilterMenuHeight configuration are ignored when true
   */
  @Input()
  public dropdownFilterDynamicDimensionCalculation: boolean;

  /**
   * Dynamic dropdown view width ratio; Used for dynamic dimension calculation
   */
  @Input()
  public dropdownFilterDynamicWidthRatio: number;

  /**
   * Dynamic dropdown view height ratio; Used for dynamic dimension calculation
   */
  @Input()
  public dropdownFilterDynamicHeightRatio: number;

  constructor(
    private dataTableConfigService: DataTableConfigService,
    private eventStateService: DataTableEventStateService,
    private dataStateService: DataTableDataStateService) {
    // Table column config
    this.sortable = dataTableConfigService.sortable;
    this.currentSortOrder = dataTableConfigService.sortOrder;
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
    this.currentSortOrder = this.baseSortOrder;
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

    if (this.dataTableConfigService.multiColumnSortable && this.sortable) {
      if (this.sortOrder === '') {
        if (this.sortPriority !== undefined) {
          throw Error('[sortPriority] should be ignored when multi column sorting is enabled with natural sort order.');
        }
      } else {
        if (this.sortPriority === undefined) {
          throw Error('[sortPriority] is required when multi column sorting is enabled with an explicit sort order.');
        }
      }

      if (this.sortPriority < 1) {
        throw Error('[sortPriority] must be greater than 1.');
      }

      if (this.dataStateService.currentSortPriority < this.sortPriority) {
        this.dataStateService.currentSortPriority = this.sortPriority;
      }
    }
  }
}
