import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { DisablingUsageComponent } from './disabling-usage.component';

@NgModule({
 bootstrap: [DisablingUsageComponent],
 declarations: [DisablingUsageComponent],
 imports: [BrowserModule, DropdownModule.forRoot()]
})
export class DisablingUsageModule {
}
