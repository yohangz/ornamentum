import { ContentChild, Directive, Input, OnInit, TemplateRef } from '@angular/core';

import {
  CellCallback, FilterFieldMapperCallback, DataRow, FilterExpressionCallback, FilterValueFormatterCallback,
  SortComparatorCallback,
  FilterOption
} from '../../models/data-table.model';
import { SortOrder } from '../../models/data-table-sort-order.enum';

/**
 * Data table column component.
 * @class DataTableColumnComponent
 */
@Directive({
  selector: 'app-data-table-column'
})
export class DataTableColumnComponent implements OnInit {

  private _sortOrder: SortOrder = SortOrder.NONE;
  private _baseSortOrder: SortOrder;

  // Content Child Properties

  @ContentChild('appDataTableCell')
  private cellTemplate: TemplateRef<any>;

  @ContentChild('appDataTableHeader')
  private headerTemplate: TemplateRef<any>;

  @ContentChild('appFilterTemplate')
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
  public filterable: boolean = false;

  /**
   * Resizeable state.
   * @default false
   * @type boolean
   */
  @Input()
  public resizable: boolean = false;

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
   * Used to extract filter field when enableMultiSelectFilter option is true.
   * @default undefined
   * @type FilterFieldMapperCallback
   */
  @Input()
  public filterFieldMapper: FilterFieldMapperCallback;

  /**
   * Filter value formatter.
   * Used to map filter multi select dropdown values when enableMultiSelectFilter option is true.
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
   * @type CellCallback
   */
  @Input()
  public onCellColorRender: CellCallback;

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
  public visible: boolean = true;

  /**
   * Filter placeholder value.
   * @default empty string
   * @type string
   */
  @Input()
  public filterPlaceholder: string = '';

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
  public enableMultiSelectFilter: boolean = false;

  /**
   * Enable displaying the number of item count selected from the column drop down.
   * @default 1
   * @type number
   */
  @Input()
  public displaySelectedLimit: number = 1;

  public filterOptions: FilterOption[] = [];

  public actualWidth: number;

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


  public resetSortOrder(): void {
    this._sortOrder = this._baseSortOrder;
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
