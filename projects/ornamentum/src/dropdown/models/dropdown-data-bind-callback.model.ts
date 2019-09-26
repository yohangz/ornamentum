import { Observable } from 'rxjs';

import { DropdownRequestParams } from './dropdown-request-params.model';
import { DropdownQueryResult } from './dropdown-query-result.model';

/**
 * Dropdown data bind event callback.
 * @param params - Dropdown request parameters object.
 * @return Dropdown query result stream.
 */
export type DropdownDataBindCallback<T> = (params: DropdownRequestParams) => Observable<DropdownQueryResult<T>>;
