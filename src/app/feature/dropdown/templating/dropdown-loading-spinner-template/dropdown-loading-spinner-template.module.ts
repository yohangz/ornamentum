import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import { DropdownLoadingSpinnerTemplateRoutingModule } from './dropdown-loading-spinner-template-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

import { DropdownLoadingSpinnerTemplateComponent, LoadingSpinnerTemplateUsageComponent } from './index';

/**
 * Module class for containing dropdown loading spinner template module.
 */
@NgModule({
  declarations: [
    DropdownLoadingSpinnerTemplateComponent,
    LoadingSpinnerTemplateUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    DropdownModule.forRoot(),
    DropdownLoadingSpinnerTemplateRoutingModule
  ],
  providers: []
})
export class DropdownLoadingSpinnerTemplateModule {
}
