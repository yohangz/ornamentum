import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import { DataTableConfigOverridingRoutingModule } from './data-table-config-overriding-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

import { DataTableConfigOverridingComponent } from './index';

@NgModule({
  declarations: [DataTableConfigOverridingComponent],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule.forRoot(),
    DataTableModule.forRoot(),
    DataTableConfigOverridingRoutingModule
  ],
  providers: []
})
export class DataTableConfigOverridingModule {
}
