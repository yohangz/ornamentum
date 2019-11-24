import { createAction } from '../store-util/action';
import { Column } from '../models/column.model';
import { SortField } from '../models/sort-field.model';
import { FilterOperator } from '../models/filter-operator.mdoel';

export const addColumn = createAction<Partial<Column>>('add-column');
export const removeColumn = createAction<string>('remove-column');

export const toggleVisibility = createAction<string>('toggle-column-visibility');
export const setVisibility = createAction<{ field: string, visibility: boolean }>('set-column-visibility');

export const setFilterOperator = createAction<{ field: string, operator: FilterOperator }>('set-column-filter-operator');
export const setFilterValue = createAction<{ field: string, value: any }>('set-column-filter-value');

export const toggleSortOrder = createAction<string>('toggle-column-sort-order');
export const setSortFields = createAction<Array<SortField>>('set-column-sort-order');
