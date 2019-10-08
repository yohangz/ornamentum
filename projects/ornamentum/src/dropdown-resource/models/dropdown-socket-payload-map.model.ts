import { DropdownQueryResult } from '../../dropdown/models/dropdown-query-result.model';
import { DropdownRequestParams } from '../../dropdown/models/dropdown-request-params.model';

/**
 * Dropdown socket payload map model.
 */
export interface DropdownSocketPayloadMap {
  'data-query': DropdownRequestParams;
  'data': DropdownQueryResult<any>;
}
