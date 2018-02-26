import { DropdownFilter } from './dropdown-filter.model';

/**
 * Dropdown data requesting parameters.
 */
export interface DropdownRequestParams {

  /**
   * Hard re-fetch data from source if true (used with client data source: dataBind).
   * @type {boolean}
   */
  hardReload: boolean;

  /**
   * Filter text.
   * @type {string}
   */
  filter?: DropdownFilter;

  /**
   * Offset value (Start index).
   * @type {number}
   */
  offset?: number;

  /**
   * Data limit (Page size).
   * @type {number}
   */
  limit?: number;
}
