import { StorageMode } from './data-table-storage-mode.enum';
import { DataTableTranslations } from './data-table.model';
import { SortOrder } from './data-table-sort-order.enum';
import { MenuPosition } from '../../dropdown/models/menu-position.enum';

export interface DataTableConfig {
  // Table base config
  persistTableState?: boolean;
  storageMode?: StorageMode;
  multiColumnSortable?: boolean;
  showHeader?: boolean;
  title?: string;
  minHeight?: string | number;
  minWidth?: string | number;
  contentHeight?:  string | number;
  pageable?: boolean;
  showIndexColumn?: boolean;
  indexColumnTitle?: string;
  rowSelectable?: boolean;
  multiRowSelectable?: boolean;
  showSubstituteRows?: boolean;
  expandableRows?: boolean;
  selectOnRowClick?: boolean;
  expandOnRowClick?: boolean;
  autoFetch?: boolean;
  showLoadingSpinner?: boolean;
  selectTrackBy?: string;
  filterDebounceTime?: number;
  filterDebounce?: boolean;
  showRefreshButton?: boolean;
  showColumnSelector?: boolean;
  expanderColumnWidth?: string | number;
  indexColumnWidth?: string | number;
  selectionColumnWidth?: string | number;
  relativeParentElement?: HTMLElement;
  offset?: number;
  limit?: number;
  translations?: DataTableTranslations

  // Table column config
  sortable?: boolean;
  sortOrder?: SortOrder;
  filterable?: boolean;
  filterPlaceholder?: string;
  columnResizable?: boolean;
  columnVisible?: boolean;
  showDropdownFilter?: boolean;

  // Column dropdown filter options
  dropdownFilterMenuPosition?: MenuPosition;
  dropdownFilterMultiSelectable?: boolean;
  dropdownFilterSearchable?: boolean;
  dropdownFilterSearchDebounceTime?: number;
  dropdownFilterSearchDebounce?: boolean;
  dropdownFilterShowSelectAll?: boolean;
  dropdownFilterGroupByField?: string;
  dropdownFilterDisplaySelectedLimit?: number;
  dropdownFilterTriggerChangeOncePerSelectAll?: boolean;
  dropdownFilterShowSelectedOptionRemove?: boolean;
  dropdownFilterMenuWidth?: number;
  dropdownFilterMenuHeight?: number;
}
