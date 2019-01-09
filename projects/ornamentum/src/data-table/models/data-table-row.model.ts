/**
 * Data table row
 */
export interface DataTableRow<T> {
  /**
   * Source data item reference
   * @type {any}
   */
  item: T;

  /**
   * Row selected state
   * @type {boolean}
   */
  selected: boolean;

  /**
   * Row disabled state
   * @type {boolean}
   */
  disabled: boolean;

  /**
   * Row color hex
   * @type {string}
   */
  color: string;

  /**
   * Row CSS class name
   * @type {string}
   */
  cssClass: string;

  /**
   * Row tooltip text
   * @type {string}
   */
  tooltip: string;

  /**
   * Row auto generated index
   * @type {number}
   */
  index: number;

  /**
   * Row expanded state
   * @type {boolean}
   */
  expanded: boolean;

  /**
   * Row data loaded state
   * @type {boolean}
   */
  dataLoaded: boolean;
}
