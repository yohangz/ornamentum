import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { OptionsUsageComponent } from './options-usage.component';

@NgModule({
 bootstrap: [OptionsUsageComponent],
 declarations: [OptionsUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class OptionsUsageModule {
}
