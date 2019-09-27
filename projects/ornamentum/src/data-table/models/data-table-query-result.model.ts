/**
 * Query result model.
 */
export interface DataTableQueryResult<T> {
  /**
   * Items collection.
   * @template Generic item type.
   */
  items: T[];

  /**
   * Item count.
   */
  count: number;
}
