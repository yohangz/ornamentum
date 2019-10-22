import { Config } from '../models/config.model';
import { createReducer, on } from '../store-util/reducer';

import { setConfig } from '../actions/config.action';

const initialState: Config = {
  id: undefined,
  title: '',

  dataBindOnInit: true,

  width: '',
  contentHeight: '',
  minContentWidth: '',
  minContentHeight: '',

  multiColumnSortable: false,

  refreshButton: true,
  loadingSpinner: true,

  persistState: '',

  filterDebounce: 500,

  pageable: false,
  substituteRows: true,

  infiniteScrollable: false,
  infiniteScrollViewDistanceRatio: 1,

  indexColumn: false,
  indexColumnWidth: '100px',

  columnMenu: false,
  columnMenuWidth: '200px',

  selectable: false,
  selectTrackBy: undefined,
  selectedValue: [],
  selectOnClick: false,
  selectMode: 'single-toggle',
  selectCheckbox: true,
  selectCheckboxColumnWidth: '100px',
  selectAllCheckbox: false,

  expandable: false,
  expandOnClick: false,
  expandColumnWidth: '100px',
  expandLoadingSpinner: true
};

export default createReducer<Config>(initialState,
  on(setConfig, (state: Config, payload: Partial<Config>): Config => {
    return {
      ...state,
      ...payload
    };
  }),
);
