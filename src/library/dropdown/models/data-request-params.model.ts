/**
 * Dropdown data requesting parameters.
 */
export interface DataRequestParams {
  /**
   * Filter text.
   * @type {string}
   */
  filter: string;

  /**
   * Offset value (Start index).
   * @type {number}
   */
  offset: number;

  /**
   * Data limit (Page size).
   * @type {number}
   */
  limit: number;
}
