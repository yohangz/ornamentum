import { DropdownFilter } from './dropdown-filter.model';

/**
 * Dropdown data requesting parameters.
 */
export interface DropdownRequestParams {
  /**
   * Hard re-fetch data from source if true (used with client data source: dataBind)
   */
  hardReload: boolean;

  /**
   * Filter text
   */
  filter?: DropdownFilter;

  /**
   * Offset value (Start index)
   */
  offset?: number;

  /**
   * Data limit (Page size)
   */
  limit?: number;
}
