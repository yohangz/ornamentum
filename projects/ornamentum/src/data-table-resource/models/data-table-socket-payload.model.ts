import { DataTableSocketPayloadMap } from './data-table-socket-payload-map.model';

/**
 * Data table socket query result model.
 */
export interface DataTablesSocketPayload<T extends keyof DataTableSocketPayloadMap = keyof DataTableSocketPayloadMap> {
  /**
   * Request or response type.
   */
  type: T;

  /**
   * Query or result data.
   */
  payload: DataTableSocketPayloadMap[T];
}
