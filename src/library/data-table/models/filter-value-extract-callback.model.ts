import { Observable } from 'rxjs/Observable';

import { FilterOption } from './filter-option.model';

import { DataTableColumnComponent } from '../components/data-table-column/data-table-column.component';

/**
 * Filter value extract callback.
 * @param {DataTableColumnComponent} column - Target filter column.
 * @return {Promise<any[]>} - Filter value promise.
 */
export type FilterValueExtractCallback = (column: DataTableColumnComponent) => Observable<FilterOption[]>;
