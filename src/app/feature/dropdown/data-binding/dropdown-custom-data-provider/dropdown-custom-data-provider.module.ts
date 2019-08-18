import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import { DropdownCustomDataProviderRoutingModule } from './dropdown-custom-data-provider-routing.module';

import { CustomDataProviderUsageComponent, DropdownCustomDataProviderComponent, CustomDataProviderMapperUsageComponent } from './index';

import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  declarations: [
    DropdownCustomDataProviderComponent,
    CustomDataProviderUsageComponent,
    CustomDataProviderMapperUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    DropdownModule.forRoot(),
    DropdownCustomDataProviderRoutingModule
  ],
  providers: []
})
export class DropdownCustomDataProviderModule {
}
