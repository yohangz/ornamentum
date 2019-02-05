import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { SelectedOptionUsageComponent } from './selected-option-usage.component';

@NgModule({
 bootstrap: [SelectedOptionUsageComponent],
 declarations: [SelectedOptionUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class SelectedOptionUsageModule {
}
