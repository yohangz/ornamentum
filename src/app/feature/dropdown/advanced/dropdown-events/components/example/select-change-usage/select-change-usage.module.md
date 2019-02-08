import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { SelectChangeUsageComponent } from './select-change-usage.component';

@NgModule({
 bootstrap: [SelectChangeUsageComponent],
 declarations: [SelectChangeUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class SelectChangeUsageModule {
}
