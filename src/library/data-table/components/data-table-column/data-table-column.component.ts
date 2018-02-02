import { ContentChild, Directive, Input, OnInit, TemplateRef } from '@angular/core';

import {
  FilterFieldMapperCallback,
  FilterExpressionCallback,
  FilterValueFormatterCallback,
  SortComparatorCallback,
  CellColourRenderCallback,
  FilterOption, DataRow
} from '../../models/data-table.model';
import { SortOrder } from '../../models/data-table-sort-order.enum';
import { MenuPosition } from '../../../dropdown/models/menu-position.enum';
import { DataTableConfigService } from '../../services/data-table-config.service';

/**
 * Data table column component.
 * @class DataTableColumnComponent
 */
@Directive({
  selector: 'ng-data-table-column'
})
export class DataTableColumnComponent implements OnInit {

  private _sortOrder: SortOrder = SortOrder.NONE;
  private _baseSortOrder: SortOrder;

  // Content Child Properties

  @ContentChild('ngDataTableCell')
  private cellTemplate: TemplateRef<any>;

  @ContentChild('ngDataTableHeader')
  private headerTemplate: TemplateRef<any>;

  @ContentChild('ngFilterTemplate')
  private filterTemplate: TemplateRef<any>;

  // Inputs

  /**
   * Column title.
   * @default undefined
   * @type string
   */
  @Input()
  public title: string;

  /**
   * Sortable state.
   * @default false
   * @type boolean
   */
  @Input()
  public sortable: boolean = false;

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
   * @default false
   * @type boolean
   */
  @Input()
  public filterable = false;

  /**
   * Resizeable state.
   * @default false
   * @type boolean
   */
  @Input()
  public resizable = false;

  /**
   * Data table item mapping field name.
   * @default undefined
   * @type string
   */
  @Input()
  public field: string;

  /**
   * Filter field identifier.
   * Fallback to field if not provided.
   * @default undefined
   * @type string
   */
  @Input()
  public filterField: string;

  /**
   * Filter expression callback function.
   * @default undefined
   * @type FilterExpressionCallback
   */
  @Input()
  public filterExpression: FilterExpressionCallback;

  /**
   * Sort expression callback function.
   * @default undefined
   * @type SortComparatorCallback
   */
  @Input()
  public sortComparatorExpression: SortComparatorCallback;

  /**
   * Custom filter field mapper.
   * Used to extract filter field when showDropdownFilter option is true.
   * @default undefined
   * @type FilterFieldMapperCallback
   */
  @Input()
  public filterFieldMapper: FilterFieldMapperCallback;

  /**
   * Filter value formatter.
   * Used to map filter multi select dropdown values when showDropdownFilter option is true.
   * @default undefined
   * @type FilterValueFormatterCallback
   */
  @Input()
  public filterValueFormatter: FilterValueFormatterCallback;

  /**
   * Column title space separated CSS class names
   * @default undefined
   * @type string
   */
  @Input()
  public styleClass: string;

  /**
   * Cell colour render event handler callback function.
   * @default undefined
   * @type CellColourRenderCallback
   */
  @Input()
  public onCellColorRender: CellColourRenderCallback;

  /**
   * Column width.
   * @default undefined
   * @type string | number
   */
  @Input()
  public width: number | string;

  /**
   * Visible state.
   * @default true
   * @type boolean
   */
  @Input()
  public visible = true;

  /**
   * Filter placeholder value.
   * @default empty string
   * @type string
   */
  @Input()
  public filterPlaceholder = '';

  /**
   * Filter value.
   * @default undefined
   * @type any
   */
  @Input()
  public filter: any;

  /**
   * Resize minimum limit.
   * @default undefined
   * @type number
   */
  @Input()
  public resizeMinLimit: number;

  /**
   * Enable multi select filtering.
   * Show multi select dropdown for filtering.
   * @default false
   * @type boolean
   */
  @Input()
  public showDropdownFilter = false;

  @Input()
  public dropdownFilterMenuPosition: MenuPosition;

  @Input()
  public dropdownFilterMultiSelectable: boolean;

  @Input()
  public dropdownFilterSearchable: boolean;

  @Input()
  public dropdownFilterSearchDebounceTime: number;

  @Input()
  public dropdownFilterSearchDebounce: boolean;

  @Input()
  public dropdownFilterShowSelectAll: boolean;

  @Input()
  public dropdownFilterDisplaySelectedLimit: number;

  @Input()
  public dropdownFilterGroupByField: string;

  @Input()
  public dropdownFilterTriggerChangeOncePerSelectAll: boolean;

  @Input()
  public dropdownFilterShowSelectedOptionRemove: boolean;

  @Input()
  public dropdownFilterMenuWidth: number;

  @Input()
  public dropdownFilterMenuHeight: number;

  /**
   * Filter menu position
   * @type {MenuPosition} Menu position
   */
  @Input()
  public filterMenuPosition: MenuPosition = MenuPosition.BOTTOM_LEFT;

  constructor(private dataTableConfigService: DataTableConfigService) {
    // Table column config
    this.sortable = dataTableConfigService.sortable;
    this._sortOrder = dataTableConfigService.sortOrder;
    this.filterable = dataTableConfigService.filterable;
    this.filterPlaceholder = dataTableConfigService.filterPlaceholder;
    this.resizable = dataTableConfigService.columnResizable;
    this.visible = dataTableConfigService.columnVisible;
    this.showDropdownFilter = dataTableConfigService.showDropdownFilter;

    this.dropdownFilterMenuPosition = dataTableConfigService.dropdownFilterMenuPosition;
    this.dropdownFilterMultiSelectable = dataTableConfigService.dropdownFilterMultiSelectable;
    this.dropdownFilterSearchable = dataTableConfigService.dropdownFilterSearchable;
    this.dropdownFilterSearchDebounceTime = dataTableConfigService.dropdownFilterSearchDebounceTime;
    this.dropdownFilterSearchDebounce = dataTableConfigService.dropdownFilterSearchDebounce;
    this.dropdownFilterShowSelectAll = dataTableConfigService.dropdownFilterShowSelectAll;
    this.dropdownFilterDisplaySelectedLimit = dataTableConfigService.dropdownFilterDisplaySelectedLimit;
    this.dropdownFilterGroupByField = dataTableConfigService.dropdownFilterGroupByField;
    this.dropdownFilterTriggerChangeOncePerSelectAll = dataTableConfigService.dropdownFilterTriggerChangeOncePerSelectAll;
    this.dropdownFilterShowSelectedOptionRemove = dataTableConfigService.dropdownFilterShowSelectedOptionRemove;
    this.dropdownFilterMenuWidth = dataTableConfigService.dropdownFilterMenuWidth;
    this.dropdownFilterMenuHeight = dataTableConfigService.dropdownFilterMenuHeight;
  }

  public filterOptions: FilterOption[] = [];

  public actualWidth: number;

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
