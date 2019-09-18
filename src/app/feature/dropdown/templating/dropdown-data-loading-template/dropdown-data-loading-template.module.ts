import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ornamentum';

import { DropdownDataLoadingTemplateRoutingModule } from './dropdown-data-loading-template-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

import { DropdownDataLoadingTemplateComponent, DataLoadingTemplateUsageComponent } from './index';

/**
 * Module class for containing dropdown data loading template module.
 */
@NgModule({
  declarations: [
    DropdownDataLoadingTemplateComponent,
    DataLoadingTemplateUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    DropdownModule.forRoot(),
    DropdownDataLoadingTemplateRoutingModule
  ],
  providers: []
})
export class DropdownDataLoadingTemplateModule {
}
