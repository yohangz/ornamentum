import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { BasicUsageComponent } from './basic-usage.component';

@NgModule({
 bootstrap: [BasicUsageComponent],
 declarations: [BasicUsageComponent],
 imports: [BrowserModule, DropdownModule.forRoot()]
})
export class BasicUsageModule {
}
