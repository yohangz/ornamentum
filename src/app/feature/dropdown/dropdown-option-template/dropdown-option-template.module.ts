import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import { DropdownOptionTemplateComponent, OptionTemplateUsageComponent } from './index';

import { DropdownOptionTemplateRoutingModule } from './dropdown-option-template-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing dropdown option template module.
 * @class DropdownOptionTemplateModule
 */
@NgModule({
  declarations: [
    DropdownOptionTemplateComponent,
    OptionTemplateUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    DropdownModule.forRoot(),
    DropdownOptionTemplateRoutingModule
  ],
  providers: []
})
export class DropdownOptionTemplateModule {
}
