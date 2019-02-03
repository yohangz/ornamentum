import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { DropdownHttpResourceService } from './services/dropdown-http-resource.service';

const PROVIDERS = [DropdownHttpResourceService];

/**
 * Dropdown data source module.
 */
@NgModule({
  imports: [HttpClientModule],
  providers: [...PROVIDERS],
})
export class DropdownResourceModule {
}

export { DropdownHttpResourceService } from './services/dropdown-http-resource.service';
