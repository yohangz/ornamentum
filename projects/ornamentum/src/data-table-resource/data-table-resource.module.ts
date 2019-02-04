import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { DataTableHttpDataFetchService } from './services/data-table-http-resource.service';
import { DataTableWebSocketDataFetchService } from './services/data-table-web-socket-resource.service';


const PROVIDERS = [DataTableHttpDataFetchService, DataTableWebSocketDataFetchService];

/**
 * Data table data source module.
 */
@NgModule({
  imports: [HttpClientModule],
  providers: [...PROVIDERS],
})
export class DataTableResourceModule {
}

export { DataTableHttpDataFetchService } from './services/data-table-http-resource.service';
export { DataTableWebSocketDataFetchService } from './services/data-table-web-socket-resource.service';
