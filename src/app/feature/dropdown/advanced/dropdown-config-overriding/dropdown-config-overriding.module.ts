import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import { DropdownConfigOverridingRoutingModule } from './dropdown-config-overriding-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

import { DropdownConfigOverridingComponent } from './index';

@NgModule({
  declarations: [DropdownConfigOverridingComponent],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule.forRoot(),
    DropdownModule.forRoot(),
    DropdownConfigOverridingRoutingModule
  ],
  providers: []
})
export class DropdownConfigOverridingModule {
}
