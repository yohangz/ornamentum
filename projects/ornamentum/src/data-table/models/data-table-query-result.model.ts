/**
 * Query result
 */
export interface DataTableQueryResult<T> {
  /**
   * Items collection
   * @type {T[]}
   * @template Generic item type
   */
  items: T[];

  /**
   * Item count
   * @type {number}
   */
  count: number;
}
