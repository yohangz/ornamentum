import { DataTableColumnComponent } from '../components/data-table-column/data-table-column.component';
import { SortOrder } from './data-table-sort-order.enum';

export type CellCallback = (row: DataRow, column: DataTableColumnComponent) => string;

export type FilterExpressionCallback = (item: any, field: string, filterValue: any) => boolean;

export type SortComparatorCallback = (previousItem: any, nextItem: any) => number;

/**
 * Row colour change event handler.
 * @param item Data item object.
 * @param row Data table row component object.
 * @param index Data row index.
 * @return {string} Row colour (CSS compliant).
 */
export type RowColourChangeCallback = (row: DataRow) => string;

/**
 * Row tooltip change event handler.
 * @param item Data item object.
 * @param row Data table row component object.
 * @param index Data row index.
 * @return {string} Row tooltip string.
 */
export type RowTooltipCallback = (row: DataRow) => string;

export type FilterFieldMapperCallback = (value: any, index: number, array: any[]) => any | any[];

export type FilterValueFormatterCallback = (value: any, index: number) => FilterOption;

export type FilterValueExtractCallback = (filterColumn: DataTableColumnComponent) => Promise<any[]>;

export type GroupFieldExtractorCallback = (row: DataRow) => any[][];

/**
 * Interface representing data table translations.
 *
 * @interface DataTableTranslations.
 */
export interface DataTableTranslations {
  indexColumn?: string;
  selectColumn?: string;
  expandColumn?: string;
  paginationLimit?: string;
  paginationRange?: string;
  noDataMessageBody?: string;
  noDataMessageHeader?: string;
}

/**
 * Interface representing data table params.
 *
 * @interface DataTableParams.
 */
export interface DataTableParams {
  offset?: number;
  limit?: number;
  sortColumns?: SortColumn[];
  filterColumns?: FilterColumn[];
}

/**
 * Interface representing data row.
 *
 * @interface DataRaw
 */
export interface DataRow {
  item: any;
  selected: boolean;
  index: number;
  expanded: boolean;
  dataLoaded: boolean;
}

/**
 * Scroll position point.
 */
export interface ScrollPoint {
  scrollLeft: number;
  scrollTop: number;
}

/**
 * Row select event arguments.
 */
export interface RowSelectEventArgs {
  row: DataRow,
  selectedRow?: string,
  selectedRows?: string[]
}

/**
 * Row click event arguments.
 */
export interface RowClickEventArgs {
  row: DataRow;
  event: MouseEvent;
}

/**
 * Double click event arguments.
 */
export interface DoubleClickEventArgs {
  row: DataRow;
  event: MouseEvent;
}

/**
 * Header click event arguments.
 */
export interface HeaderClickEventArgs {
  column: DataTableColumnComponent;
  event: MouseEvent;
}

/**
 * Cell click event arguments.
 */
export interface CellClickEventArgs {
  column: DataTableColumnComponent;
  row: DataRow;
  event: MouseEvent;
}

/**
 * Filter event arguments.
 */
export interface FilterEventArgs {
  column: DataTableColumnComponent;
  filter: any;
}

/**
 * Filter options.
 */
export interface FilterOption {
  key: any;
  value: string;
}

/**
 * Group details.
 */
export interface GroupDetail {
  rowCount: number;
  groups: any[][];
  groupHolder: any[];
}

export interface SortColumn {
  field: string;
  sortOrder: SortOrder;
  comparator: SortComparatorCallback;
}

export interface FilterColumn {
  field: string;
  filterValue: any;
  filterExpression: FilterExpressionCallback;
}
