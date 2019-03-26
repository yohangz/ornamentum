import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { FilteringUsageComponent } from './filtering-usage.component';

@NgModule({
 bootstrap: [FilteringUsageComponent],
 declarations: [FilteringUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
   ]
})
export class FilteringUsageModule {
}
