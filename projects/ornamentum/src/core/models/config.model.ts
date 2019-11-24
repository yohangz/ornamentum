import { FilterLogic } from './filter-logic.model';
import { StatePersistMode } from './state-persist-mode.model';
import { SelectMode } from './select-mode.model';
import { TableDimensionConfig } from './table-dimension-config.model';

export interface Config extends TableDimensionConfig {
  id: string;
  title: string;

  dataBindOnInit: boolean;

  multiColumnSortable: boolean;

  suppressRefreshButton: boolean;
  suppressLoadingSpinner: boolean;

  statePersistMode: StatePersistMode;

  filterDebounce: number;
  filterLogic: FilterLogic;

  pageable: boolean;
  suppressPaginationPanel: boolean;
  suppressSubstituteRows: boolean;

  infiniteScrollable: boolean;
  infiniteScrollViewDistanceRatio: number;

  autoIndexColumn: boolean;
  autoIndexColumnWidth: string;

  suppressContextMenu: boolean;
  contextMenuWidth: string;

  selectable: boolean;
  selectTrackBy: string;
  selectOnClick: boolean;
  selectMode: SelectMode;
  selectCheckboxColumnWidth: string;
  suppressSelectCheckbox: boolean;
  suppressSelectAllCheckbox: boolean;

  expandable: boolean;
  expandOnClick: boolean;
  expandIconColumnWidth: string;
  suppressExpandLoadingSpinner: boolean;
}
