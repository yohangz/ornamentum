import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { SetFirstOptionSelectedUsageComponent } from './set-first-option-selected-usage.component';

@NgModule({
 bootstrap: [SetFirstOptionSelectedUsageComponent],
 declarations: [SetFirstOptionSelectedUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class SetFirstOptionSelectedUsageModule {
}
