/**
 * Group details.
 */
export interface GroupDetail {
  /**
   * Row count.
   * @type {number}
   */
  rowCount: number;

  /**
   * Item groups.
   * Collection of groups. Actual item data grouping.
   * @type {any[][]}
   */
  groups: any[][];

  /**
   * Group holder collection.
   * Used to scaffold the table layout.
   * @type {any[]}
   */
  groupHolder: any[];
}
