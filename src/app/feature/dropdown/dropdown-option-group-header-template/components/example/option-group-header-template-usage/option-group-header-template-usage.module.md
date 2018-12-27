import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { OptionGroupHeaderTemplateUsageComponent } from './option-group-header-template-usage.component';

@NgModule({
 bootstrap: [OptionGroupHeaderTemplateUsageComponent],
 declarations: [OptionGroupHeaderTemplateUsageComponent],
 imports: [BrowserModule, DropdownModule.forRoot()]
})
export class OptionGroupHeaderTemplateUsageModule {
}
