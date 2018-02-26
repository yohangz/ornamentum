import { Observable } from 'rxjs/Observable';

import { DropdownRequestParams } from './dropdown-request-params.model';
import { DropdownQueryResult } from './dropdown-query-result.model';

export type DropdownDataBindCallback = (params: DropdownRequestParams) => Observable<DropdownQueryResult<any>>;
