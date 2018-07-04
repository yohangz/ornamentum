import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { DisablingUsageComponent } from './disabling-usage.component';

@NgModule({
 bootstrap: [DisablingUsageComponent],
 declarations: [DisablingUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class DisablingUsageModule {
}
