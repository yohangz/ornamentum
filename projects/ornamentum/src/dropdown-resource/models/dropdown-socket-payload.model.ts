import { DropdownSocketPayloadMap } from './dropdown-socket-payload-map.model';

/**
 * Dropdown socket payload model.
 */
export interface DropdownSocketPayload<T extends keyof DropdownSocketPayloadMap = keyof DropdownSocketPayloadMap> {
  /**
   * Request or response type.
   */
  type: T;

  /**
   * Request or response payload.
   */
  payload: DropdownSocketPayloadMap[T];
}
