import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { SubstituteRowsDisabledUsageComponent } from './substitute-rows-disabled-usage.component';

@NgModule({
 bootstrap: [SubstituteRowsDisabledUsageComponent],
 declarations: [SubstituteRowsDisabledUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class SubstituteRowsDisabledUsageModule {
}
