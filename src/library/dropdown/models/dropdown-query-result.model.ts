export interface DropdownQueryResult<T> {
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
