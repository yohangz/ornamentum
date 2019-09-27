/**
 * Scroll position point model.
 */
export interface DataTableScrollPoint {
  /**
   * Scroll left pixel count.
   */
  scrollLeft: number;

  /**
   * Scroll top pixel count.
   */
  scrollTop: number;

  /**
   * Scroll height pixel count.
   */
  scrollHeight: number;

  /**
   * Scroll width pixel count.
   */
  scrollWidth: number;

  /**
   * Scroll element height pixel count.
   */
  clientHeight: number;

  /**
   * Scroll element width pixel count.
   */
  clientWidth: number;

  /**
   * True if scroll direction is horizontal.
   */
  isHorizontal?: boolean;

  /**
   * True if scroll direction is vertical.
   */
  isVertical?: boolean;
}
