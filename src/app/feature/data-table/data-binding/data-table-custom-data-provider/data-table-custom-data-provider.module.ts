import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DataTableModule, DataTableResourceModule } from 'ornamentum';

import { DataTableCustomDataProviderRoutingModule } from './data-table-custom-data-provider-routing.module';
import { SharedModule } from '../../../../shared/shared.module';

import { CustomDataProviderUsageComponent, DataTableCustomDataProviderComponent, CustomDataProviderMapperUsageComponent } from './index';

@NgModule({
  declarations: [
    DataTableCustomDataProviderComponent,
    CustomDataProviderUsageComponent,
    CustomDataProviderMapperUsageComponent
  ],
  imports: [
    CommonModule,
    DataTableCustomDataProviderRoutingModule,
    FormsModule,
    SharedModule.forRoot(),
    DataTableModule.forRoot(),
    DataTableResourceModule.forRoot(),
  ],
})
export class DataTableCustomDataProviderModule {}
