import { DataTableColumnComponent } from '../components/data-table-column/data-table-column.component';
import { FilterOption } from './filter-option.model';
import { Observable } from 'rxjs/Observable';

/**
 * Filter value extract callback.
 * @param {DataTableColumnComponent} filterColumn - Filter column.
 * @return {Promise<any[]>} - Filter value promise.
 */
export type FilterValueExtractCallback = (filterColumn: DataTableColumnComponent) => Observable<FilterOption[]>;
