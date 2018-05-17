import { Observable } from 'rxjs';

import { DropdownRequestParams } from './dropdown-request-params.model';
import { DropdownQueryResult } from './dropdown-query-result.model';

/**
 * Dropdown data bind event callback.
 * @param {DropdownRequestParams} params - Dropdown request parameters object.
 * @return {Observable<DropdownQueryResult<any>>} Dropdown query result stream.
 */
export type DropdownDataBindCallback = (params: DropdownRequestParams) => Observable<DropdownQueryResult<any>>;
