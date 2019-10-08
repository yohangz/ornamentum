import { DropdownRequestParams } from '../../dropdown/models/dropdown-request-params.model';

/**
 * Data table filter params model.
 */
export interface DataTableFilterParams extends DropdownRequestParams {
  /**
   * Filter column identifier
   */
  id: string;
}
