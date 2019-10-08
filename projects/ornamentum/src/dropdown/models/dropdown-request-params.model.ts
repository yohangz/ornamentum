/**
 * Dropdown data requesting parameters model.
 */
export interface DropdownRequestParams {
  /**
   * Hard re-fetch data from source if true (used with client data source: dataBind).
   */
  hardReload: boolean;

  /**
   * Display track by field path.
   */
  displayTrackBy: string;

  /**
   * Select track by field path.
   */
  selectTrackBy: string;

  /**
   * Disabled track by field path.
   */
  disabledTrackBy: string;

  /**
   * Filter text.
   */
  filter?: string;

  /**
   * Offset value (Start index).
   */
  offset?: number;

  /**
   * Data limit (Page size).
   */
  limit?: number;
}
