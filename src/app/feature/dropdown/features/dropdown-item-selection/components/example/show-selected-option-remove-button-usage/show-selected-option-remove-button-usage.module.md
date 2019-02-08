import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { ShowSelectedOptionRemoveButtonUsageComponent } from './show-selected-option-remove-button-usage.component';

@NgModule({
 bootstrap: [ShowSelectedOptionRemoveButtonUsageComponent],
 declarations: [ShowSelectedOptionRemoveButtonUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class ShowSelectedOptionRemoveButtonUsageModule {
}
