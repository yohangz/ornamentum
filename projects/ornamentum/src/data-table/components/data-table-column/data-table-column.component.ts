import { Component, ContentChild, Input, OnDestroy, OnInit, TemplateRef } from '@angular/core';

import { Subscription } from 'rxjs';

import { get } from '../../../utility/services/object-utility.class';

import { DataTableCellColorRenderCallback } from '../../models/data-table-cell-color-render-callback.model';
import { DataTableRow } from '../../models/data-table-row.model';
import { DataTableFilterExpressionCallback } from '../../models/data-table-filter-expression-callback.model';

import { DropdownSelectMode } from '../../../dropdown/dropdown.module';
import { DataTableSortOrder } from '../../models/data-table-sort-order.model';

import { DataTableConfigService } from '../../services/data-table-config.service';
import { DataTableEventStateService } from '../../services/data-table-event.service';
import { ViewPosition } from '../../../utility/models/view-position.model';
import { DataTableDataStateService } from '../../services/data-table-data-state.service';

/**
 * Data table column component. Data table columns associated data is captured via this component.
 */
@Component({
  selector: 'ng-data-table-column',
  template: ''
})
export class DataTableColumnComponent implements OnInit, OnDestroy {
  private filterValueExtractorSubscription: Subscription;

  private currentSortOrder: DataTableSortOrder = '';
  private baseSortOrder: DataTableSortOrder = '';
  private baseSortPriority = 0;

  public actualWidth: number;
  public id: string;
  public selectorId: string;

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
   * Filter expression event handler callback. Used to apply custom data filter expression logic.
   */
  @Input()
  public filterExpression: DataTableFilterExpressionCallback;

  /**
   * Cell color render event handler callback.
   */
  @Input()
  public onCellColorRender: DataTableCellColorRenderCallback<any>;

  // Inputs

  /**
   * Column display title.
   */
  @Input()
  public title: string;

  /**
   * Columns sortable if true. Show sort indicator on column title.
   */
  @Input()
  public sortable: boolean;

  /**
   * Multi column sort priority. Lowest number will get the height precedence. Usage of same precedence number in
   * multiple columns may lead to unexpected behaviors. This priority number will be displayed in the column header
   * when multi column sorting is enabled hence, consider indexing accordingly.
   */
  @Input()
  public set sortPriority(value: number) {
    this.baseSortPriority = value;
  }

  /**
   * Get sort priority value.
   */
  public get sortPriority(): number {
    return this.baseSortPriority || (this.baseSortPriority ? 1 : 0);
  }

  /**
   * Set initial column sort order.
   */
  @Input()
  public set sortOrder(value: DataTableSortOrder) {
    this.currentSortOrder = value;
    this.baseSortOrder = value;
  }

  /**
   * Get initial column sort order.
   */
  public get sortOrder(): DataTableSortOrder {
    return this.currentSortOrder;
  }

  /**
   * Column filterable if true. Show filter options on filter header row when enabled.
   */
  @Input()
  public filterable: boolean;

  /**
   * Column resizeable if true. Show column resize indicator on column right corner.
   */
  @Input()
  public resizable: boolean;

  /**
   * Display track by field path used to extract cell text.
   * This field support object paths expressions 'root[0].nest'.
   */
  @Input()
  public displayTrackBy: string;

  /**
   * Filter track by field path used to run filter value match.
   * This field support object paths expressions 'root[0].nest'.
   */
  @Input()
  public filterTrackBy: string;

  /**
   * Sort track by field path used to run sort value compare.
   * This field support object paths expressions 'root[0].nest'.
   */
  @Input()
  public sortTrackBy: string;

  /**
   * Column title CSS class names. Use space delimiter to separate class names.
   */
  @Input()
  public cssClass: string;

  /**
   * Static column width in pixels or percentage.
   */
  @Input()
  public width: number | string;

  /**
   * Render column if true. Else include in column selector but not rendered.
   */
  @Input()
  public visible: boolean;

  /**
   * Show filed in column selector popup if true.
   */
  @Input()
  public showInColumnSelector = true; // TODO: move to base conf

  /**
   * Filter placeholder value. Placeholder text to show on filter text box. Applicable only for none dropdown filter mode.
   */
  @Input()
  public filterPlaceholder: string;

  /**
   * Applied filter value on initialize.
   */
  @Input()
  public filter: any;

  /**
   * Show filter clear button if true. Applicable only for none dropdown filter mode.
   */
  @Input()
  public showFilterClearButton: any;

  /**
   * Resize minimum limit. Column cannot be resized to fit less than the number of pixels specified here.
   */
  @Input()
  public resizeMinLimit: number;

  // Dropdown filter properties

  /**
   * Show dropdown filter if true. Filter data using dropdown filter.
   */
  @Input()
  public showDropdownFilter: boolean;

  /**
   * Dropdown filter menu position. Placement of filter popup menu.
   */
  @Input()
  public dropdownFilterMenuPosition: ViewPosition;

  /**
   * Dropdown select mode. Filter option select mode.
   */
  @Input()
  public dropdownFilterSelectMode: DropdownSelectMode;

  /**
   * Dropdown filter searchable if true. Display search box within filter option menu.
   */
  @Input()
  public dropdownFilterSearchable: boolean;

  /**
   * Dropdown filter search debounce time in milliseconds. Applicable only when dropdownFilterSearchDebounce is true.
   */
  @Input()
  public dropdownFilterSearchDebounceTime: number;

  /**
   * Enable dropdown filter data search debounce with provided dropdownFilterSearchDebounceTime if true.
   */
  @Input()
  public dropdownFilterSearchDebounce: boolean;

  /**
   * Dropdown filter show option select checkbox.
   */
  @Input()
  public dropDownFilterShowOptionSelectCheckbox: boolean;

  /**
   * Dropdown filter selected items display limit.
   */
  @Input()
  public dropdownFilterWrapDisplaySelectLimit: number;

  /**
   * Dropdown filter group by field name in item schema.
   */
  @Input()
  public dropdownFilterGroupByField: string;

  /**
   * Dropdown filter show selected option remove button if true.
   */
  @Input()
  public dropdownFilterShowSelectedOptionRemoveButton: boolean;

  /**
   * Dropdown filter show all select options clear button if true.
   */
  @Input()
  public dropdownFilterShowClearSelectionButton: boolean;

  /**
   * Dropdown filter menu width in pixels.
   */
  @Input()
  public dropdownFilterMenuWidth: number;

  /**
   * Dropdown filter menu height in pixels.
   */
  @Input()
  public dropdownFilterMenuHeight: number;

  /**
   * Dropdown filter multi select option max width.
   */
  @Input()
  public dropdownFilterMultiSelectOptionMaxWidth: number;

  /**
   * Dropdown filter close menu on select if true.
   */
  @Input()
  public dropdownFilterCloseMenuOnSelect: boolean;

  /**
   * Dynamically calculate Dropdown filter menu dimensions relative to column width; dropdownFilterMenuWidth and
   * dropdownFilterMenuHeight configuration are ignored when true.
   */
  @Input()
  public dropdownFilterDynamicDimensionCalculation: boolean;

  /**
   * Dynamic dropdown view width ratio. Used for dynamic dimension calculation.
   */
  @Input()
  public dropdownFilterDynamicWidthRatio: number;

  /**
   * Dynamic dropdown view height ratio. Used for dynamic dimension calculation.
   */
  @Input()
  public dropdownFilterDynamicHeightRatio: number;

  /**
   * Dropdown filter Set select option track by field path which is used to uniquely identify options for selection tracking.
   * This field support object paths expressions 'root[0].nest'.
   */
  @Input()
  public dropdownFilterSelectTrackBy: string;

  /**
   * Dropdown filter display value track by field path which is used to extract dropdown option display value.
   * This field support object paths expressions 'root[0].nest'.
   */
  @Input()
  public dropdownFilterDisplayTrackBy: string;

  /**
   * Dropdown filter option disable state field path which is used to disabled state dropdown options.
   * This field support object paths expressions 'root[0].nest'.
   */
  @Input()
  public dropdownFilterDisabledTrackBy: string;

  constructor(
    private config: DataTableConfigService,
    private eventStateService: DataTableEventStateService,
    private dataStateService: DataTableDataStateService) {
    // Table column config
    this.sortable = config.sortable;
    this.currentSortOrder = config.sortOrder;
    this.filterable = config.filterable;
    this.filterPlaceholder = config.filterPlaceholder;
    this.resizable = config.columnResizable;
    this.visible = config.columnVisible;
    this.showDropdownFilter = config.showDropdownFilter;
    this.showFilterClearButton = config.showFilterClearButton;

    // Dropdown filter config
    this.dropdownFilterMenuPosition = config.dropdownFilterMenuPosition;
    this.dropdownFilterSelectMode = config.dropdownFilterSelectMode;
    this.dropdownFilterSearchable = config.dropdownFilterSearchable;
    this.dropdownFilterSearchDebounceTime = config.dropdownFilterSearchDebounceTime;
    this.dropdownFilterSearchDebounce = config.dropdownFilterSearchDebounce;
    this.dropdownFilterWrapDisplaySelectLimit = config.dropdownFilterWrapDisplaySelectLimit;
    this.dropdownFilterGroupByField = config.dropdownFilterGroupByField;
    this.dropdownFilterShowSelectedOptionRemoveButton = config.dropdownFilterShowSelectedOptionRemoveButton;
    this.dropdownFilterShowClearSelectionButton = config.dropdownFilterShowClearSelectionButton;
    this.dropdownFilterMenuWidth = config.dropdownFilterMenuWidth;
    this.dropdownFilterMenuHeight = config.dropdownFilterMenuHeight;
    this.dropdownFilterMultiSelectOptionMaxWidth = config.dropdownFilterMultiSelectOptionMaxWidth;
    this.dropdownFilterCloseMenuOnSelect = config.dropdownFilterCloseMenuOnSelect;
    this.dropdownFilterDynamicDimensionCalculation = config.dropdownFilterDynamicDimensionCalculation;
    this.dropdownFilterDynamicWidthRatio = config.dropdownFilterDynamicWidthRatio;
    this.dropdownFilterDynamicHeightRatio = config.dropdownFilterDynamicHeightRatio;
    this.dropdownFilterDisabledTrackBy = config.dropdownFilterDisabledTrackBy;
    this.dropdownFilterSelectTrackBy = config.dropdownFilterSelectTrackBy;
    this.dropdownFilterDisplayTrackBy = config.dropdownFilterDisplayTrackBy;

    ++this.dataStateService.currentColumnId;
    this.id = this.dataStateService.getUniqueId('col', this.dataStateService.currentColumnId); // TODO: validate and fix id extract logic
    this.selectorId = this.dataStateService.getUniqueId('cs', this.dataStateService.currentColumnId);
  }

  public getFilterValue(): string|string[] {
    if (this.showDropdownFilter) {
      if (this.dropdownFilterSelectMode === 'multi') {
        return this.filter && this.filter.map(value => get(value, this.dropdownFilterSelectTrackBy));
      } else {
        return this.filter && get(this.filter, this.dropdownFilterSelectTrackBy); // fix this
      }
    } else {
      return this.filter;
    }
  }

  /**
   * Reset data sort order.
   */
  public resetSortOrder(): void {
    this.currentSortOrder = this.baseSortOrder;
  }

  /**
   * Get dynamic cell color.
   * @param row Data row object.
   * @return Cell color string.
   */
  public getCellColor(row: DataTableRow<any>) {
    if (this.onCellColorRender !== undefined) {
      return this.onCellColorRender(row, this);
    }
  }

  /**
   * Get new sort order upon sort click.
   * @return New sort order enum value.
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
   * Get current sort state icon css class enabled state.
   * @return Sort order icon css class collection object.
   */
  public getSortIconClass(): any {
    return {
      'sort-asc': this.sortOrder === 'asc',
      'sort-dsc': this.sortOrder === 'desc',
      'sort-reset': !this.sortOrder
    };
  }

  /**
   * Component destroy lifecycle event handler.
   */
  public ngOnDestroy(): void {
    if (this.filterValueExtractorSubscription) {
      this.filterValueExtractorSubscription.unsubscribe();
    }
  }

  /**
   * Component initialize lifecycle event handler.
   */
  public ngOnInit(): void {
    if (!this.cssClass && this.displayTrackBy) {
      if (/^[a-zA-Z0-9_]+$/.test(this.displayTrackBy)) {
        this.cssClass = 'column-' + this.displayTrackBy;
      } else {
        this.cssClass = 'column-' + this.displayTrackBy.replace(/[^a-zA-Z0-9_]/g, '');
      }
    }

    this.eventStateService.columnBind.emit(this);

    if (this.config.multiColumnSortable && this.sortable) {
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
