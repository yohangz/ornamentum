import { createReducer, on } from '../store-util/reducer';
import { Column } from '../models/column.model';
import * as actions from '../actions/column.action';
import { ColumnDefinition } from '../models/column-definition.model';
import { setInitialState } from '../actions/root.action';
import { InitialState } from '../models/initial-state.model';
import { removeIn, updateIn } from '../util/collection-util';
import { SortField } from '../models/sort-field.model';

const baseColumnState: Column = {
  title: '',
  field: undefined,

  cssClass: '',
  width: undefined,
  visible: true,
  suppressInContextMenu: false,

  sortable: true,
  sortTrackBy: undefined,

  resizeable: false,
  resizeMinLimit: 100,

  filterable: false,
  filterTrackBy: undefined,
  filterType: 'string',
  filterOperator: 'contains',
  filterIgnoreCase: true,
  filterValue: undefined
};

const initialState: ColumnDefinition = {
  columns: [],
  sortFields: []
};

function toggleSortOrder(sortFields: SortField[], field: string): SortField[] {
  const sortField = sortFields.find(sf => sf.field === field);
  if (sortField) {
    if (sortField.sortOrder === 'asc') {
      return updateIn(sortFields, 'field', field, (): SortField => {
        return {
          field,
          sortOrder: 'desc'
        };
      });
    }

    return removeIn(sortFields, 'field', field);
  } else {
    return [ ...sortFields, { field, sortOrder: 'asc' } ];
  }
}

export default createReducer<ColumnDefinition>(initialState,
  on(setInitialState, (state: ColumnDefinition, { columns, sortFields  }: InitialState): ColumnDefinition => {
    return {
      columns: columns.map((column: Partial<Column>) => {
        return {
          ...baseColumnState,
          ...column
        };
      }),
      sortFields: [ ...sortFields ]
    };
  }),
  on(actions.addColumn, (state: ColumnDefinition, column: Partial<Column>): ColumnDefinition => {
    return {
      ...state,
      columns: [
        ...state.columns,
        {
          ...baseColumnState,
          ...column
        }
      ]
    };
  }),
  on(actions.removeColumn, (state: ColumnDefinition, field: string): ColumnDefinition => {
    return {
      ...state,
      columns: removeIn(state.columns, 'field', field)
    };
  }),
  on(actions.toggleVisibility, (state: ColumnDefinition, field: string): ColumnDefinition => {
    return {
      ...state,
      columns: updateIn(state.columns, 'field', field, ((column: Column): Column => {
        return {
          ...column,
          visible: !column.visible
        };
      }))
    };
  }),
  on(actions.setVisibility, (state: ColumnDefinition, { field, visibility }): ColumnDefinition => {
    return {
      ...state,
      columns: updateIn(state.columns, 'field', field, ((column: Column): Column => {
        return {
          ...column,
          visible: visibility
        };
      }))
    };
  }),
  on(actions.setFilterOperator, (state: ColumnDefinition, { field, operator }): ColumnDefinition => {
    return {
      ...state,
      columns: updateIn(state.columns, 'field', field, ((column: Column): Column => {
        return {
          ...column,
          filterOperator: operator
        };
      }))
    };
  }),
  on(actions.setFilterValue, (state: ColumnDefinition, { field, value }): ColumnDefinition => {
    return {
      ...state,
      columns: updateIn(state.columns, 'field', field, ((column: Column): Column => {
        return {
          ...column,
          filterValue: value
        };
      }))
    };
  }),
  on(actions.toggleSortOrder, (state: ColumnDefinition, field: string): ColumnDefinition => {
    return {
      ...state,
      sortFields: toggleSortOrder(state.sortFields, field)
    };
  }),
  on(actions.setSortFields, (state: ColumnDefinition, sortFields: SortField[]): ColumnDefinition => {
    return {
      ...state,
      sortFields: [ ...sortFields ]
    };
  })
);


