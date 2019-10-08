import { Injectable } from '@angular/core';
import { DataTableWebsocketDataFetchService } from './data-table-websocket-data-fetch.service';

/**
 * Data table web socket data fetch service factory.
 */
@Injectable()
export class DataTableWebsocketResourceFactoryService {

  /**
   * Get new data table websocket fetch service instance.
   */
  public getResourceProvider(): DataTableWebsocketDataFetchService {
    return new DataTableWebsocketDataFetchService();
  }
}
