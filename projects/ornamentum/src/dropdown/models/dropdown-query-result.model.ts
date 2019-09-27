/**
 * Dropdown query result model.
 */
export interface DropdownQueryResult<T> {
  /**
   * Options collection.
   */
  options: T[];

  /**
   * Option count.
   */
  count: number;
}
