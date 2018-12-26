import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { LoadOnInitUsageComponent } from './load-on-init-usage.component';

@NgModule({
 bootstrap: [LoadOnInitUsageComponent],
 declarations: [LoadOnInitUsageComponent],
 imports: [BrowserModule, DropdownModule.forRoot()]
})
export class LoadOnInitUsageModule {
}
