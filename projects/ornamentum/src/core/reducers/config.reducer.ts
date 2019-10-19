import { Config } from '../models/config.model';
import { createReducer, on } from '../store-util/reducer';

import { setInitialState } from '../actions/config.action';

const initialState: Config = {
  id: undefined,
  title: '',
  width: '',
  minContentWidth: '',
  minContentHeight: '',
  contentHeight: '',
  multiColumnSortable: false,
  showRefreshButton: true,
  showSpinner: true,
  statePersist: false,
  statePersistMode: 'local-storage',
  filterDebounce: true,
  filterDebounceTime: 500,
  paginate: false,
  showSubstituteRows: false,
  infiniteScrollable: false,
  scrollViewDistanceRatio: 1,
  showAutoIndex: false,
  autoIndexColumnTitle: 'id',
  autoIndexColumnWidth: '100px',
  showColumnSelector: false,
  columnSelectorWidth: '100px',
  translations: {
    noDataMessageHeader: 'Whoops!',
    noDataMessageBody: 'No data to display. Added data will appear here.',
    paginationLimit: 'Limit',
    paginationRange: 'Results'
  },
  rowSelectable: false,
  rowSelectMode: 'single',
  showRowSelectCheckbox: true,
  showRowSelectAllCheckbox: false,
  selectOnClick: false,
  rowSelectorColumnWidth: '100px',
  selectedRows: [],
  selectTrackBy: 'key',
  showExpandableRows: false,
  expandOnClick: false,
  expanderColumnWidth: '100px',
  showExpanderLoadingSpinner: false,
  loadOnInit: true
};

export const configReducer = createReducer<Config>(initialState,
  on(setInitialState, (state: Config, payload: Partial<Config>): Config => {
    return {
      ...state,
      ...payload
    };
  }),
);
