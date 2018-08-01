import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import { DropdownOptionGroupHeaderTemplateComponent, OptionGroupHeaderTemplateUsageComponent } from './index';

import { DropdownOptionGroupHeaderTemplateRoutingModule } from './dropdown-option-group-header-template-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing dropdown option group header template module.
 * @class DropdownOptionGroupHeaderTemplateModule
 */
@NgModule({
  declarations: [
    DropdownOptionGroupHeaderTemplateComponent,
    OptionGroupHeaderTemplateUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    DropdownModule.forRoot(),
    DropdownOptionGroupHeaderTemplateRoutingModule
  ],
  providers: []
})
export class DropdownOptionGroupHeaderTemplateModule {
}
