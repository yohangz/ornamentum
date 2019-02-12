import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { DataTableHttpDataFetchService } from './services/data-table-http-resource.service';
import { DataTableWebsocketDataFetchService } from './services/data-table-websocket-resource.service';

const PROVIDERS = [DataTableHttpDataFetchService, DataTableWebsocketDataFetchService];

/**
 * Data table data source module.
 */
@NgModule({
  imports: [HttpClientModule],
  providers: [...PROVIDERS]
})
export class DataTableResourceModule {}

export { DataTableHttpDataFetchService } from './services/data-table-http-resource.service';
export { DataTableWebsocketDataFetchService } from './services/data-table-websocket-resource.service';
