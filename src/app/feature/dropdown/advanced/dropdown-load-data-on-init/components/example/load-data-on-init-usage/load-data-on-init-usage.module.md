import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { LoadOnInitUsageComponent } from './load-data-on-init-usage.component';

@NgModule({
 bootstrap: [LoadDataOnInitUsageComponent],
 declarations: [LoadDataOnInitUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class LoadDataOnInitUsageModule {
}
