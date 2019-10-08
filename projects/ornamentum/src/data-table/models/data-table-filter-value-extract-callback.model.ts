import { Observable } from 'rxjs';

import { DropdownQueryResult } from '../../dropdown/models/dropdown-query-result.model';
import { DropdownRequestParams } from '../../dropdown/models/dropdown-request-params.model';

/**
 * Filter value extract callback model.
 * @param column Target filter column.
 * @return Filter value promise.
 */
export type DataTableFilterValueExtractCallback<T> = (params: DropdownRequestParams) => Observable<DropdownQueryResult<T>>;
