import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ResourceUtilityModule } from '../resource-utility/resource-utility.module';

import { DropdownHttpResourceService } from './services/dropdown-http-resource.service';
import { DropdownWebsocketDataFetchService } from './services/dropdown-websocket-resource.service';
import { DropdownResourceConfigService } from './services/dropdown-resource-config.service';

const PROVIDERS = [DropdownHttpResourceService, DropdownWebsocketDataFetchService];

/**
 * Dropdown data source module.
 */
@NgModule({
  imports: [HttpClientModule, ResourceUtilityModule],
  providers: [...PROVIDERS]
})
export class DropdownResourceModule {
  /**
   * Set module root configuration overrides
   * @return Module with custom providers
   */
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: DropdownResourceModule,
      providers: [DropdownResourceConfigService]
    };
  }
}

export { DropdownHttpResourceService } from './services/dropdown-http-resource.service';
export { DropdownWebsocketDataFetchService } from './services/dropdown-websocket-resource.service';
