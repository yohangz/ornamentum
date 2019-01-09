import { Observable } from 'rxjs';

import { DataTableQueryResult } from './data-table-query-result.model';
import { DataTableRequestParams } from './data-table-request-params.model';

/**
 * Data bind callback handler
 * @param params Data table request params
 * @return Data table query result stream
 */
export type DataTableDataBindCallback = (params: DataTableRequestParams) => Observable<DataTableQueryResult<any>>;
