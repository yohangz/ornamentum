import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ResourceUtilityModule } from '../resource-utility/resource-utility.module';

import { DataTableHttpDataFetchService } from './services/data-table-http-resource.service';
import { DataTableWebsocketDataFetchService } from './services/data-table-websocket-resource.service';
import { DataTableResourceConfigService } from './services/data-table-resource-config.service';

const PROVIDERS = [DataTableHttpDataFetchService, DataTableWebsocketDataFetchService];

/**
 * Data table data source module.
 */
@NgModule({
  imports: [HttpClientModule, ResourceUtilityModule],
  providers: [...PROVIDERS]
})
export class DataTableResourceModule {
  /**
   * Set module root configuration overrides
   * @return Module with custom providers
   */
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: DataTableResourceModule,
      providers: [DataTableResourceConfigService]
    };
  }
}

export { DataTableHttpDataFetchService } from './services/data-table-http-resource.service';
export { DataTableWebsocketDataFetchService } from './services/data-table-websocket-resource.service';
