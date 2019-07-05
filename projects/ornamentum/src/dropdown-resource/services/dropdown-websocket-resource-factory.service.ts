import { Injectable } from '@angular/core';

import { DropdownWebsocketDataFetchService } from './dropdown-websocket-data-fetch.service';

/**
 * Dropdown web socket data fetch service factory.
 */
@Injectable()
export class DropdownWebsocketResourceFactoryService {

  /**
   * Get new dropdown websocket fetch service instance.
   */
  public getResourceProvider<T>(): DropdownWebsocketDataFetchService<T> {
    return new DropdownWebsocketDataFetchService<T>();
  }
}
