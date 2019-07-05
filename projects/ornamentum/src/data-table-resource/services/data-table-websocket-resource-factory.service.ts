import { Injectable } from '@angular/core';
import { DataTableWebsocketDataFetchService } from './data-table-websocket-resource.service';

/**
 * Data table web socket data fetch service factory.
 */
@Injectable()
export class DataTableWebsocketResourceFactoryService {

  /**
   * Get new data table websocket fetch service instance.
   */
  public getResourceProvider<T>(): DataTableWebsocketDataFetchService<T> {
    return new DataTableWebsocketDataFetchService<T>();
  }
}
