import { DataTableTranslations } from './data-table-translations.model';

import { DataTableStorageMode } from './data-table-storage-mode.model';
import { DataTableSortOrder } from './data-table-sort-order.model';
import { DataTableSelectMode } from './data-table-select-mode.model';
import { DropdownSelectMode } from '../../dropdown/dropdown.module';
import { ViewPosition } from '../../utility/models/view-position.model';

/**
 * Data table configuration
 */
export interface DataTableConfig {
  // Table base config

  /**
   * Persist table state on provided storage mode if true; Depends on storageMode property.
   */
  persistTableState?: boolean;

  /**
   * Storage mode to persist table state; Only applicable when persistTableState is true.
   */
  storageMode?: DataTableStorageMode;

  /**
   * Multiple column sortable if true; Only applicable for sortable true columns.
   */
  multiColumnSortable?: boolean;

  /**
   * Show table header bar if true
   */
  showHeader?: boolean;

  /**
   * Show refresh button if true; Only applicable when showHeader is true
   */
  showRefreshButton?: boolean;

  /**
   * Show column selector if true; Only applicable when showHeader is true
   */
  showColumnSelector?: boolean;

  /**
   * Column selector dropdown width can be provide using pixels; Only applicable when showColumnSelector is true
   */
  columnSelectorWidth?: string | number;

  /**
   * Title to be shown in th header; Only applicable when showHeader is true
   */
  title?: string;

  /**
   * Width value in pixels; Can be used to set the width of teh table (responsive if not set)
   */
  width?: string | number;

  /**
   * Minimum height value in pixels; Can be used to set the min height of the table content with a scroll-x (Horizontal scrolling)
   */
  minHeight?: string | number;

  /**
   * Maximum height value in pixels; Can be used to set the min width of the table content with a scroll-x (Horizontal scrolling)
   */
  minWidth?: string | number;

  /**
   * Full table content height including title bar, header and pager bar in pixel; Can be used to dynamically set table
   * height on a full responsive none scroll-y (Vertical scrolling) design
   */
  contentHeight?: string | number;

  /**
   * Show pagination bar if true; Depends on offset and limit values. Trigger dataLoad event with offset and limit values
   */
  pageable?: boolean;

  /**
   * Show auto generated index column with row numbering if true
   */
  showIndexColumn?: boolean;

  /**
   * Index column header title; Applicable when showIndexColumn is true
   */
  indexColumnTitle?: string;

  /**
   * Show row select checkbox and select state if true
   */
  rowSelectable?: boolean;

  /**
   * Trigger row select on click event if true; Applicable only when rowSelectable is true
   */
  selectOnRowClick?: boolean;

  /**
   * Data table row select mode; Applicable only when rowSelectable is true
   */
  selectMode?: DataTableSelectMode;

  /**
   * Show row select checkbox column if true; Only applicable when rowSelectable is true
   */
  showRowSelectCheckbox?: boolean;

  /**
   * Show select all row checkbox on column header if true;
   * Only applicable when showRowSelectCheckbox, rowSelectable is true & item selectMode is  multi
   */
  showRowSelectAllCheckbox?: boolean;

  /**
   * Show substitute rows if true; Fill with empty rows when row count < limit
   */
  showSubstituteRows?: boolean;

  /**
   * Show row expander if true; Render ngDataTableExpand template on expand click
   */
  expandableRows?: boolean;

  /**
   * Expand and render expand template on row click if true; Only applicable when expandableRows is true
   */
  expandOnRowClick?: boolean;

  /**
   * Auto trigger dataLoad event on initialization if true
   */
  autoFetch?: boolean;

  /**
   * Show loading spinner if true
   */
  showLoadingSpinner?: boolean;

  /**
   * Select track by field name in item schema
   */
  selectTrackBy?: string;

  /**
   * Enable filter data debounce with provided filterDebounceTime if true
   */
  filterDebounce?: boolean;

  /**
   * Filter debounce time in milliseconds; Applicable only when filterDebounce is true
   */
  filterDebounceTime?: number;

  /**
   * Expander column width in pixels.
   * Applicable only when expandableRows is true.
   */
  expanderColumnWidth?: string | number;

  /**
   * Index column width in pixels; Applicable only when showIndexColumn is true
   */
  indexColumnWidth?: string | number;

  /**
   * Selection column width in pixels; Applicable only when showColumnSelector is true
   */
  selectionColumnWidth?: string | number;

  /**
   * Data offset value (start offset index); Applicable only when pageable is true
   */
  offset?: number;

  /**
   * Data limit value (page size); Applicable only when pageable is true
   */
  limit?: number;

  /**
   * Data max limit value (max page size); Applicable only when pageable is true
   */
  maxLimit?: number;

  /**
   * Base display text translations; Used to localize label default text values
   */
  baseTranslations?: DataTableTranslations;

  /**
   * State persistence key prefix
   */
  stateKeyPrefix?: string;

  /**
   * Show row expand loading spinner if true; Applicable only when row expand is enabled
   */
  showRowExpandLoadingSpinner?: boolean;

  // Table column config

  /**
   * Columns sortable if true; Show sort indicator on column title
   */
  sortable?: boolean;

  /**
   * Initial column sort order
   */
  sortOrder?: DataTableSortOrder;

  /**
   * Column filterable if true; Show filter options bar when enabled
   */
  filterable?: boolean;

  /**
   * Filter placeholder string; Applicable only when showDropdownFilter is false
   */
  filterPlaceholder?: string;

  /**
   * Column resizeable if true; Show column resize indicator on column right corner
   */
  columnResizable?: boolean;

  /**
   * Render column if true
   */
  columnVisible?: boolean;

  /**
   * Show dropdown filter if true
   */
  showDropdownFilter?: boolean;

  /**
   * Show filter clear button if true; Applicable only for none dropdown filter mode
   */
  showFilterClearButton?: boolean;

  // Column dropdown filter options

  /**
   * Dropdown filter menu position; Applicable only when showDropdownFilter is true
   */
  dropdownFilterMenuPosition?: ViewPosition;

  /**
   * Dropdown select mode; Applicable only when showDropdownFilter is true
   */
  dropdownFilterSelectMode?: DropdownSelectMode;

  /**
   * Dropdown filter searchable if true; Show dropdown filter search input
   */
  dropdownFilterSearchable?: boolean;

  /**
   * Enable dropdown filter data search debounce with provided dropdownFilterSearchDebounceTime if true
   */
  dropdownFilterSearchDebounce?: boolean;

  /**
   * Dropdown filter search debounce time in milliseconds; Applicable only when dropdownFilterSearchDebounce is true
   */
  dropdownFilterSearchDebounceTime?: number;

  /**
   * Dropdown filter group by field name in item schema
   */
  dropdownFilterGroupByField?: string;

  /**
   * Dropdown filter wrap display selected limit; Wrap selected items when limit exceeded
   */
  dropdownFilterWrapDisplaySelectLimit?: number;

  /**
   * Dropdown filter show selected option remove button if true
   */
  dropdownFilterShowSelectedOptionRemoveButton?: boolean;

  /**
   * Dropdown filter show all select options clear button if true
   */
  dropdownFilterShowClearSelectionButton?: boolean;

  /**
   * Dropdown filter menu width in pixels
   */
  dropdownFilterMenuWidth?: number;

  /**
   * Dropdown filter menu height in pixels
   */
  dropdownFilterMenuHeight?: number;

  /**
   * Dropdown filter multi select option max width
   */
  dropdownFilterMultiSelectOptionMaxWidth?: number;

  /**
   * Dropdown filter close menu on select if true
   */
  dropdownFilterCloseMenuOnSelect?: boolean;

  /**
   * Dynamically calculate Dropdown filter menu dimensions relative to column width;
   * DropdownFilterMenuWidth and dropdownFilterMenuHeight configuration are ignored when true
   */
  dropdownFilterDynamicDimensionCalculation?: boolean;

  /**
   * Dynamic dropdown view width ratio; Used for dynamic dimension calculation
   */
  dropdownFilterDynamicWidthRatio?: number;

  /**
   * Dynamic dropdown view height ratio; Used for dynamic dimension calculation
   */
  dropdownFilterDynamicHeightRatio?: number;
}
