import { Config } from '../models/config.model';
import { createReducer, on } from '../store-util/reducer';

import { InitialState } from '../models/initial-state.model';

import * as actions from '../actions/config.action';
import { setInitialState } from '../actions/root.action';
import { TableDimensionConfig } from '../models/table-dimension-config.model';

const initialState: Config = {
  id: undefined,
  title: '',

  dataBindOnInit: true,

  width: '',
  contentHeight: '',
  minContentWidth: '',
  minContentHeight: '',

  multiColumnSortable: false,

  suppressRefreshButton: false,
  suppressLoadingSpinner: false,

  statePersistMode: '',

  filterDebounce: 500,
  filterLogic: 'and',

  pageable: false,
  suppressPaginationPanel: false,
  suppressSubstituteRows: false,

  infiniteScrollable: false,
  infiniteScrollViewDistanceRatio: 1,

  autoIndexColumn: false,
  autoIndexColumnWidth: '100px',

  suppressContextMenu: true,
  contextMenuWidth: '200px',

  selectable: false,
  selectTrackBy: undefined,
  selectOnClick: false,
  selectMode: 'single-toggle',
  suppressSelectCheckbox: false,
  selectCheckboxColumnWidth: '100px',
  suppressSelectAllCheckbox: true,

  expandable: false,
  expandOnClick: false,
  expandIconColumnWidth: '100px',
  suppressExpandLoadingSpinner: false
};

export default createReducer<Config>(initialState,
  on(setInitialState, (state: Config, { config }: InitialState): Config => {
    return {
      ...state,
      ...config
    };
  }),
  on(actions.setTableDimensions, (state: Config, dimensions: TableDimensionConfig): Config => {
    return {
      ...state,
      ...dimensions
    };
  }),
);
