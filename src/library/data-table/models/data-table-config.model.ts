import { StorageMode } from './data-table-storage-mode.enum';
import { DataTableTranslations } from './data-table.model';

export interface DataTableConfig {
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
}
