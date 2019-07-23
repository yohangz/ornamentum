/**
 * Scroll position point
 */
export interface DataTableScrollPoint {
  /**
   * Scroll left pixel count
   */
  scrollLeft: number;

  /**
   * Scroll top pixel count
   */
  scrollTop: number;

  /**
   * True if scroll direction is horizontal.
   */
  isHorizontal?: boolean;

  /**
   * True if scroll direction is vertical.
   */
  isVertical?: boolean;
}
