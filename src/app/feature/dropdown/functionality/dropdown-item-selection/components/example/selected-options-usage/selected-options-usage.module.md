import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { SelectedOptionsUsageComponent } from './selected-options-usage.component';

@NgModule({
 bootstrap: [SelectedOptionsUsageComponent],
 declarations: [SelectedOptionsUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class SelectedOptionsUsageModule {
}
