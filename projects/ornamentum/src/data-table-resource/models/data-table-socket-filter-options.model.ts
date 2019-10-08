import { DropdownQueryResult } from '../../dropdown/models/dropdown-query-result.model';

/**
 * Data table socket data filter model.
 */
export interface DataTableSocketFilterOptions {
  /**
   * Unique identifier.
   */
  id: number;

  /**
   * Data table filter options.
   */
  data: DropdownQueryResult<any>;
}
