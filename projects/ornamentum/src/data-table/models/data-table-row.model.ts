/**
 * Data table row model.
 */
export interface DataTableRow<T> {
  /**
   * Data row identifier.
   */
  id: string;
  /**
   * Source data item reference.
   */
  item: T;

  /**
   * Row selected state.
   */
  selected: boolean;

  /**
   * Row disabled state.
   */
  disabled: boolean;

  /**
   * Row color hex.
   */
  color: string;

  /**
   * Row CSS class name.
   */
  cssClass: string;

  /**
   * Row tooltip text.
   */
  tooltip: string;

  /**
   * Row auto generated index.
   */
  index: number;

  /**
   * Row expanded state.
   */
  expanded: boolean;

  /**
   * Row data loaded state.
   */
  dataLoaded: boolean;
}
