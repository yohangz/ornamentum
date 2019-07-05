import { ModuleWithProviders, NgModule } from '@angular/core';

import { ResourceUtilityModule } from '../resource-utility/resource-utility.module';

import { DataTableHttpDataFetchService } from './services/data-table-http-data-fetch.service';
import { DataTableWebsocketDataFetchService } from './services/data-table-websocket-data-fetch.service';
import { DataTableResourceConfigService } from './services/data-table-resource-config.service';
import { DataTableHttpResourceFactoryService } from './services/data-table-http-resource-factory.service';
import { DataTableWebsocketResourceFactoryService } from './services/data-table-websocket-resource-factory.service';

const PROVIDERS = [DataTableHttpResourceFactoryService, DataTableWebsocketResourceFactoryService];

/**
 * Data table data source module.
 */
@NgModule({
  imports: [ResourceUtilityModule],
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

export { DataTableHttpDataFetchService } from './services/data-table-http-data-fetch.service';
export { DataTableHttpResourceFactoryService };

export { DataTableWebsocketDataFetchService } from './services/data-table-websocket-data-fetch.service';
export { DataTableWebsocketResourceFactoryService };
