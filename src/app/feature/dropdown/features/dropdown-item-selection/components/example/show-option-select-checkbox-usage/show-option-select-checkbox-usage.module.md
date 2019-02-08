import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { ShowOptionSelectCheckboxUsageComponent } from './show-option-select-checkbox-usage.component.component';

@NgModule({
 bootstrap: [ShowOptionSelectCheckboxUsageComponent],
 declarations: [ShowOptionSelectCheckboxUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class ShowOptionSelectCheckboxUsageModule {
}
