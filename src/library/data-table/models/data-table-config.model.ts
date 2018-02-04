import { StorageMode } from './storage-mode.enum';
import { DataTableTranslations } from './data-tabl-translations.model';
import { SortOrder } from './sort-order.enum';
import { MenuPosition } from '../../dropdown/models/menu-position.enum';

/**
 * Data table configuration.
 */
export interface DataTableConfig {
  // Table base config

  /**
   * Persist table state on provided storage mode if true.
   * Depends on storageMode property.
   * @type {boolean}
   */
  persistTableState?: boolean;

  /**
   * Storage mode to persist table state.
   * Only applicable when persistTableState is true.
   * @type {StorageMode}
   */
  storageMode?: StorageMode;

  /**
   * Multiple column sortable if true.
   * Only applicable for sortable true columns.
   * @type {boolean}
   */
  multiColumnSortable?: boolean;

  /**
   * Show table header bar if true.
   * @type {boolean}
   */
  showHeader?: boolean;

  /**
   * Show refresh button if true.
   * Only applicable when showHeader is true.
   * @type {boolean}
   */
  showRefreshButton?: boolean;

  /**
   * Show column selector if true.
   * Only applicable when showHeader is true.
   * @type {boolean}
   */
  showColumnSelector?: boolean;

  /**
   * Title to be shown in th header.
   * Only applicable when showHeader is true.
   * @type {string}
   */
  title?: string;

  /**
   * Minimum height value in pixels.
   * Can be used to set the min height of the table content with a scroll-x (Horizontal scrolling).
   * @type {string | number}
   */
  minHeight?: string | number;

  /**
   * Maximum height value in pixels.
   * Can be used to set the min width of the table content with a scroll-x (Horizontal scrolling).
   * @type {string | number}
   */
  minWidth?: string | number;

  /**
   * Full table content height including title bar, header and pager bar in pixel.
   * Can be used to dynamically set table height on a full responsive none scroll-y (Vertical scrolling) design.
   * @type {string | number}
   */
  contentHeight?:  string | number;

  /**
   * Show pagination bar if true.
   * Depends on offset and limit values. Trigger dataLoad event with offset and limit values.
   * @type {boolean}
   */
  pageable?: boolean;

  /**
   * Show auto generated index column with row numbering if true.
   * @type {boolean}
   */
  showIndexColumn?: boolean;

  /**
   * Index column header title.
   * Applicable when showIndexColumn is true.
   * @type {string}
   */
  indexColumnTitle?: string;

  /**
   * Show row select checkbox and select state if true.
   * @type {boolean}
   */
  rowSelectable?: boolean;

  /**
   * Trigger row select on click event if true.
   * Applicable only when rowSelectable is true.
   * @type {boolean}
   */
  selectOnRowClick?: boolean;

  /**
   * Multiple row selectable if true.
   * Applicable only when rowSelectable is true.
   * @type {boolean}
   */
  multiRowSelectable?: boolean;

  /**
   * Show substitute rows if true.
   * Fill with empty rows when row count < limit.
   * @type {boolean}
   */
  showSubstituteRows?: boolean;

  /**
   * Show row expander if true.
   * Render ngDataTableExpand template on expand click.
   * @type {boolean}
   */
  expandableRows?: boolean;

  /**
   * Expand and render expand template on row click if true.
   * Only applicable when expandableRows is true.
   * @type {boolean}
   */
  expandOnRowClick?: boolean;

  /**
   * Auto trigger dataLoad event on initialization if true.
   * @type {boolean}
   */
  autoFetch?: boolean;

  /**
   * Show loading spinner if true.
   * @type {boolean}
   */
  showLoadingSpinner?: boolean;

  /**
   * Select track by field name in item schema.
   * @type {string}
   */
  selectTrackBy?: string;

  /**
   * Enable filter data debounce with provided filterDebounceTime if true.
   * @type {boolean}
   */
  filterDebounce?: boolean;

  /**
   * Filter debounce time in milliseconds.
   * Applicable only when filterDebounce is true.
   * @type {number}
   */
  filterDebounceTime?: number;

  /**
   * Expander column width in pixels.
   * Applicable only when expandableRows is true.
   * @type {string | number}
   */
  expanderColumnWidth?: string | number;

  /**
   * Index column width in pixels.
   * Applicable onlyu when showIndexColumn is true.
   * @type {string | number}
   */
  indexColumnWidth?: string | number;

  /**
   * Selection column width in pixels.
   * Applicable only when showColumnSelector is true.
   * @type {string | number}
   */
  selectionColumnWidth?: string | number;

  /**
   * Relative parent HTML element reference to render popup components.
   * @type {HTMLElement}
   */
  relativeParentElement?: HTMLElement;

  /**
   * Data offset value (start offset index).
   * Applicable only when pageable is true.
   * @type {number}
   */
  offset?: number;

  /**
   * Data limit value (page size).
   * Applicable only when pageable is true.
   * @type {number}
   */
  limit?: number;

  /**
   * Display text translations.
   * @type {DataTableTranslations}
   */
  translations?: DataTableTranslations

  // Table column config

  /**
   * Columns sortable if true.
   * Show sort indicator on column title.
   * @type {boolean}
   */
  sortable?: boolean;

  /**
   * Initial column sort order.
   * @type {SortOrder}
   */
  sortOrder?: SortOrder;

  /**
   * Column filterable if true.
   * Show filter options bar when enabled.
   * @type {boolean}
   */
  filterable?: boolean;

  /**
   * Filter placeholder string.
   * Applicable only when showDropdownFilter is false.
   * @type {string}
   */
  filterPlaceholder?: string;

  /**
   * Column resizeable if true.
   * Show column resize indicator on column right corner.
   * @type {boolean}
   */
  columnResizable?: boolean;

  /**
   * Render column if true.
   * @type {boolean}
   */
  columnVisible?: boolean;

  /**
   * Show dropdown filter if true.
   * @type {boolean}
   */
  showDropdownFilter?: boolean;

  // Column dropdown filter options

  /**
   * Dropdown filter menu position.
   * Applicable only when showDropdownFilter is true.
   * @type {MenuPosition}
   */
  dropdownFilterMenuPosition?: MenuPosition;

  /**
   * Dropdown filter multi selectable if true.
   * Applicable only when showDropdownFilter is true.
   * @type {boolean}
   */
  dropdownFilterMultiSelectable?: boolean;

  /**
   * Dropdown filter searchable if true.
   * Show dropdown filter search input.
   * @type {boolean}
   */
  dropdownFilterSearchable?: boolean;

  /**
   * Enable dropdown filter data search debounce with provided dropdownFilterSearchDebounceTime if true.
   * @type {boolean}
   */
  dropdownFilterSearchDebounce?: boolean;

  /**
   * Dropdown filter search debounce time in milliseconds.
   * Applicable only when dropdownFilterSearchDebounce is true.
   * @type {number}
   */
  dropdownFilterSearchDebounceTime?: number;

  /**
   * Dropdown filter show select all checkbox if true.
   * @type {boolean}
   */
  dropdownFilterShowSelectAll?: boolean;

  /**
   * Dropdown filter group by field name in item schema.
   * @type {string}
   */
  dropdownFilterGroupByField?: string;

  /**
   * Dropdown filter wrap display selected limit.
   * Wrap selected items when limit exceeded.
   * @type {number}
   */
  dropdownFilterWrapDisplaySelectLimit?: number;

  /**
   * Dropdown filter trigger change once per select all if true.
   * @type {boolean}
   */
  dropdownFilterTriggerChangeOncePerSelectAll?: boolean;

  /**
   * Dropdown filter show selected option remove button if true.
   * @type {boolean}
   */
  dropdownFilterShowSelectedOptionRemove?: boolean;

  /**
   * Dropdown filter menu width in pixels.
   * @type {number}
   */
  dropdownFilterMenuWidth?: number;

  /**
   * Dropdown filter menu height in pixels.
   * @type {number}
   */
  dropdownFilterMenuHeight?: number;
}
