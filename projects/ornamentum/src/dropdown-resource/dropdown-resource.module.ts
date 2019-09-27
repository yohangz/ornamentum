import { ModuleWithProviders, NgModule } from '@angular/core';

import { ResourceUtilityModule } from '../resource-utility/resource-utility.module';

import { DropdownHttpDataFetchService } from './services/dropdown-http-data-fetch.service';
import { DropdownWebsocketDataFetchService } from './services/dropdown-websocket-data-fetch.service';
import { DropdownResourceConfigService } from './services/dropdown-resource-config.service';
import { DropdownHttpResourceFactoryService } from './services/dropdown-http-resource-factory.service';
import { DropdownWebsocketResourceFactoryService } from './services/dropdown-websocket-resource-factory.service';

const PROVIDERS = [DropdownHttpResourceFactoryService, DropdownWebsocketResourceFactoryService];

/**
 * Dropdown data source module.
 */
@NgModule({
  imports: [ResourceUtilityModule],
  providers: [...PROVIDERS]
})
export class DropdownResourceModule {
  /**
   * Set module root configuration overrides.
   * @return Module with custom providers.
   */
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: DropdownResourceModule,
      providers: [DropdownResourceConfigService]
    };
  }
}

export { DropdownHttpDataFetchService } from './services/dropdown-http-data-fetch.service';
export { DropdownHttpResourceFactoryService };

export { DropdownWebsocketDataFetchService } from './services/dropdown-websocket-data-fetch.service';
export { DropdownWebsocketResourceFactoryService };
