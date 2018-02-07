/**
 * Query result
 */
export interface QueryResult<T> {
  /**
   * Items collection.
   * @type {T[]}
   * @template T - Generic item type.
   */
  items: T[];

  /**
   * Item count.
   * @type {number}
   */
  count: number;
}
