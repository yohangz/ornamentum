import { Observable } from 'rxjs';

import { DataTableQueryResult } from './data-table-query-result.model';
import { DataTableRequestParams } from './data-table-request-params.model';

export type DataTableDataBindCallback = (params: DataTableRequestParams) => Observable<DataTableQueryResult<any>>;
