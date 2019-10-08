import { DataTableQueryResult } from '../../data-table/models/data-table-query-result.model';
import { DataTableSocketFilterOptions } from './data-table-socket-filter-options.model';
import { DataTableSocketFilterOptionsQuery } from './data-table-socket-filter-options-query.model';
import { DataTableRequestParams } from '../../data-table/models/data-table-request-params.model';

/**
 * Data table socket query type model.
 */
export interface DataTableSocketPayloadMap {
  'data-query': DataTableRequestParams;
  'data': DataTableQueryResult<any>;
  'filter-options-query': DataTableSocketFilterOptionsQuery;
  'filter-options': DataTableSocketFilterOptions;
}
