/**
 * Data table export mode model.
 */
export enum DataFetchMode {
  /**
   * Re-fetch data from source and load data after resetting table state.
   */
  HARD_RELOAD,

  /**
   * Re-fetch data from source and load data without resetting table state.
   */
  SOFT_RELOAD,

  /**
   * Load data without changing table state state.
   */
  SOFT_LOAD
}
