import { createReducer, on } from '../store-util/reducer';
import { Column } from '../models/column.model';
import { setColumns } from '../actions/column.action';

const columnState: Column = {
  id: undefined,
  title: '',
  displayTrackBy: 'value',

  cssClass: 'string',
  width: undefined,
  visible: true,
  showInContextMenu: true,

  sortable: true,
  sortTrackBy: undefined,
  sortPriority: 0,
  sortOrder: '',

  resizeable: false,
  resizeMinLimit: 100,

  filterable: false,
  filterTrackBy: undefined,
  filterType: 'string',
  filterOperator: 'contains',
  filterLogic: 'and',
  filterIgnoreCase: true,
  filterValue: undefined
};

const initialState: Column[] = [];

export default createReducer<Column[]>(initialState,
  on(setColumns, (state: Column[], payload: Array<Partial<Column>>): Column[] => {
    return payload.map((column: Partial<Column>) => {
      return {
        ...columnState,
        ...column
      };
    });
  }),

);


