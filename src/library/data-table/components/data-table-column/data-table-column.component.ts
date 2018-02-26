import { Component, ContentChild, Input, OnDestroy, OnInit, TemplateRef } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { CellColourRenderCallback } from '../../models/cell-colour-render-callback.model';
import { SortOrder } from '../../models/sort-order.enum';
import { MenuPosition } from '../../../dropdown/models/menu-position.enum';
import { FilterOption } from '../../models/filter-option.model';
import { DataRow } from '../../models/data-row.model';
import { FilterFieldMapperCallback } from '../../models/filter-field-mapper-callback.model';
import { FilterExpressionCallback } from '../../models/filter-expression-callback.model';

import { DataTableConfigService } from '../../services/data-table-config.service';
import { DataTableDataStateService } from '../../services/data-table-data-state.service';

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

  private _sortOrder: SortOrder = SortOrder.NONE;
  private _baseSortOrder: SortOrder;

  // public filterOptions: FilterOption[] = [];
  public actualWidth: number;

  // Content Child Properties

  @ContentChild('ngDataTableCell')
  private cellTemplate: TemplateRef<any>;

  @ContentChild('ngDataTableHeader')
  private headerTemplate: TemplateRef<any>;

  @ContentChild('ngFilterTemplate')
  private filterTemplate: TemplateRef<any>;

  // Callback event handlers

  /**
   * Filter expression callback function.
   * @type FilterExpressionCallback
   */
  @Input()
  public filterExpression: FilterExpressionCallback;

  /**
   * Custom filter field mapper.
   * Used to extract filter field when showDropdownFilter option is true.
   * @type FilterFieldMapperCallback
   */
  @Input()
  public filterFieldMapper: FilterFieldMapperCallback;

  /**
   * Cell colour render event handler callback function.
   * @type CellColourRenderCallback
   */
  @Input()
  public onCellColorRender: CellColourRenderCallback;

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
   * @type SortOrder
   */
  @Input()
  public set sortOrder(value: SortOrder) {
    this._sortOrder = value;
    this._baseSortOrder = value;
  }

  /**
   * Get data sort order.
   * @returns {SortOrder}
   */
  public get sortOrder(): SortOrder {
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
  public styleClass: string;

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

  /**
   * Resize minimum limit.
   * @type number
   */
  @Input()
  public resizeMinLimit: number;

  /**
   * Enable multi select filtering.
   * Show multi select dropdown for filtering.\
   * @type boolean
   */
  @Input()
  public showDropdownFilter = false;

  /**
   * Dropdown filter menu position.
   * @type MenuPosition
   */
  @Input()
  public dropdownFilterMenuPosition: MenuPosition;

  /**
   * Dropdown filter multi selectable state.
   * @type boolean
   */
  @Input()
  public dropdownFilterMultiSelectable: boolean;

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
   * Dropdown filter trigger select change once per select all state.
   * @type boolean
   */
  @Input()
  public dropdownFilterTriggerChangeOncePerSelectAll: boolean;

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

  constructor(private dataTableConfigService: DataTableConfigService,
              private dataStateService: DataTableDataStateService) {
    // Table column config
    this.sortable = dataTableConfigService.sortable;
    this._sortOrder = dataTableConfigService.sortOrder;
    this.filterable = dataTableConfigService.filterable;
    this.filterPlaceholder = dataTableConfigService.filterPlaceholder;
    this.resizable = dataTableConfigService.columnResizable;
    this.visible = dataTableConfigService.columnVisible;
    this.showDropdownFilter = dataTableConfigService.showDropdownFilter;

    // Dropdown filter config
    this.dropdownFilterMenuPosition = dataTableConfigService.dropdownFilterMenuPosition;
    this.dropdownFilterMultiSelectable = dataTableConfigService.dropdownFilterMultiSelectable;
    this.dropdownFilterSearchable = dataTableConfigService.dropdownFilterSearchable;
    this.dropdownFilterSearchDebounceTime = dataTableConfigService.dropdownFilterSearchDebounceTime;
    this.dropdownFilterSearchDebounce = dataTableConfigService.dropdownFilterSearchDebounce;
    this.dropdownFilterShowSelectAll = dataTableConfigService.dropdownFilterShowSelectAll;
    this.dropdownFilterWrapDisplaySelectLimit = dataTableConfigService.dropdownFilterWrapDisplaySelectLimit;
    this.dropdownFilterGroupByField = dataTableConfigService.dropdownFilterGroupByField;
    this.dropdownFilterTriggerChangeOncePerSelectAll = dataTableConfigService.dropdownFilterTriggerChangeOncePerSelectAll;
    this.dropdownFilterShowSelectedOptionRemoveButton = dataTableConfigService.dropdownFilterShowSelectedOptionRemoveButton;
    this.dropdownFilterShowClearSelectionButton = dataTableConfigService.dropdownFilterShowClearSelectionButton;
    this.dropdownFilterMenuWidth = dataTableConfigService.dropdownFilterMenuWidth;
    this.dropdownFilterMenuHeight = dataTableConfigService.dropdownFilterMenuHeight;
  }

  public resetSortOrder(): void {
    this._sortOrder = this._baseSortOrder;
  }

  /**
   * Get cell colour.
   * @param {DataRow} row Data row object.
   * @return {string} Cell colour string.
   */
  public getCellColor(row: DataRow) {
    if (this.onCellColorRender !== undefined) {
      return this.onCellColorRender(row, this);
    }
  }

  /**
   * Get new sort order upon sort click.
   * @return {SortOrder} New sort order enum value.
   */
  public getNewSortOrder(): SortOrder {
    let newSortOrder: SortOrder;
    switch (this.sortOrder) {
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

  public getSortIconClass() {
    return {
      'zmdi-sort-amount-asc': this.sortOrder === SortOrder.ASC,
      'zmdi-sort-amount-desc': this.sortOrder === SortOrder.DESC,
      'zmdi-format-line-spacing': this.sortOrder === undefined || this.sortOrder === SortOrder.NONE
    };
  }

  // public fetchFilterOptions(): void {
  //   if (!this.showDropdownFilter) {
  //     return;
  //   }
  //
  //   if (this.dataStateService.onFilterValueExtract) {
  //     // Clear previous filter subscription before invoking new event.
  //     if (this.filterValueExtractorSubscription) {
  //       this.filterValueExtractorSubscription.unsubscribe();
  //       this.filterValueExtractorSubscription = null;
  //     }
  //
  //     this.filterValueExtractorSubscription = this.dataStateService.onFilterValueExtract(this)
  //       .subscribe((options: FilterOption[]) => {
  //         this.filterOptions = options;
  //       });
  //   }
  //
  // }

  public ngOnDestroy(): void {
    if (this.filterValueExtractorSubscription) {
      this.filterValueExtractorSubscription.unsubscribe();
    }
  }

  /**
   * Lifecycle hook that is called after data-bound properties of a directive are initialized.
   */
  public ngOnInit(): void {
    if (!this.styleClass && this.field) {
      if (/^[a-zA-Z0-9_]+$/.test(this.field)) {
        this.styleClass = 'column-' + this.field;
      } else {
        this.styleClass = 'column-' + this.field.replace(/[^a-zA-Z0-9_]/g, '');
      }
    }
  }
}
