import { QueryResult } from './query-result.model';
import { DataTableParams } from './data-table-params.model';
import { Observable } from 'rxjs/Observable';

export type DataBindCallback = (params: DataTableParams) => Observable<QueryResult<any>>;
