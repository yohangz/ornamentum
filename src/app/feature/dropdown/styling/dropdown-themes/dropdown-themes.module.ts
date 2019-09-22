import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import { DropdownThemesRoutingModule } from './dropdown-themes-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

import { DropdownThemesComponent, AdvancedUsageComponent } from './index';

/**
 * Module class for containing dropdown themes module.
 */
@NgModule({
  declarations: [
    DropdownThemesComponent,
    AdvancedUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    DropdownModule.forRoot(),
    DropdownThemesRoutingModule
  ],
  providers: []
})
export class DropdownThemesModule {
}
