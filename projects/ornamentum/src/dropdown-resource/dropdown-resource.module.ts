import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { DropdownHttpResourceService } from './services/dropdown-http-resource.service';
import { DropdownWebsocketDataFetchService } from './services/dropdown-websocket-resource.service';

const PROVIDERS = [DropdownHttpResourceService, DropdownWebsocketDataFetchService];

/**
 * Dropdown data source module.
 */
@NgModule({
  imports: [HttpClientModule],
  providers: [...PROVIDERS]
})
export class DropdownResourceModule {}

export { DropdownHttpResourceService } from './services/dropdown-http-resource.service';
export { DropdownWebsocketDataFetchService } from './services/dropdown-websocket-resource.service';
