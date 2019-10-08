import { Observable } from 'rxjs';

import { DropdownQueryResult } from '../../dropdown/models/dropdown-query-result.model';
import { DataTableFilterParams } from './data-table-filter-params.model';

/**
 * Filter value extract callback model.
 * @param column Target filter column.
 * @return Filter value promise.
 */
export type DataTableFilterValueExtractCallback<T> = (params: DataTableFilterParams) => Observable<DropdownQueryResult<T>>;
