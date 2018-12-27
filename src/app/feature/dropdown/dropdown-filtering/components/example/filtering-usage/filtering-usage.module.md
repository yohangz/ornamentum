import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { FilteringUsageComponent } from './filtering-usage.component';

@NgModule({
 bootstrap: [FilteringUsageComponent],
 declarations: [FilteringUsageComponent],
 imports: [BrowserModule, DropdownModule.forRoot()]
})
export class FilteringUsageModule {
}
