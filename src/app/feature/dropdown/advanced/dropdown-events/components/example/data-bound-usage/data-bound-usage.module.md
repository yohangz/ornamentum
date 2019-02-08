import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { DataBoundUsageComponent } from './data-bound-usage.component';

@NgModule({
 bootstrap: [DataBoundUsageComponent],
 declarations: [DataBoundUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class DataBoundUsageModule {
}
