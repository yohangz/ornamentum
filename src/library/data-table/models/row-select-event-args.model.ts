import { DataRow } from './data-row.model';

/**
 * Row select event arguments.
 */
export interface RowSelectEventArgs {
  /**
   * target data row.
   * @type {DataRow}
   */
  row: DataRow;

  /**
   * Selected row.
   * Only available when multiple select mode is false.
   * @type {string}
   */
  selectedRow?: string;

  /**
   * Selected rows.
   * Only available when multiple select mode is true.
   * @type {string[]}
   */
  selectedRows?: string[];
}
