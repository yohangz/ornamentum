import { createReducer, on } from '../store-util/reducer';
import { Column } from '../models/column.model';
import { setInitialState } from '../actions/column.action';

const columnState: Column = {
  id: undefined,
  title: '',
  sortable: false,
  sortPriority: 0,
  sortOrder: 'asc',
  filterable: false,
  resizeable: false,
  resizeMinLimit: 100,
  displayTrackBy: undefined,
  filterTrackBy: undefined,
  sortTrackBy: undefined,
  cssClass: undefined,
  width: undefined,
  visible: true,
  showInColumnSelector: true,
  filterMode: 'text',
  textFilterPlaceholder: 'Filter',
  textFilterShowClearButton: true,
  textFilterValue: '',
  showDropdownFilter: false,
  dfMenuPosition: 'bottom-left',
  dfSelectMode: 'multi',
  dfSearchable: true,
  dfSearchDebounce: true,
  dfSearchDebounceTime: 500,
  dfShowOptionSelectCheckbox: true,
  dfWrapDisplaySelectLimit: 1,
  dfGroupByField: undefined,
  dfShowSelectedOptionRemoveButton: false,
  dfShowClearSelectionButton: true,
  dfMenuWidth: 320,
  dfMenuHeight: 250,
  dfMultiSelectOptionMaxWidth: 135,
  dfCloseMenuOnSelect: true,
  dfDynamicDimensionCalculation: true,
  dfDynamicWidthRatio: 1.25,
  dfDynamicHeightRatio: 1.25,
  dfSelectTrackBy: 'key',
  dfDisplayTrackBy: 'value',
  dfDisabledTrackBy: 'disabled'
};

const initialState: Column[] = [];

export default createReducer<Column[]>(initialState,
  on(setInitialState, (state: Column[], payload: Array<Partial<Column>>): Column[] => {
    return payload.map((column: Partial<Column>) => {
      return {
        ...columnState,
        ...column
      };
    });
  }),

);


