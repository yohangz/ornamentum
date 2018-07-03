import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { WithSubstituteRowsUsageComponent } from './with-substitute-rows-usage.component';

@NgModule({
 bootstrap: [WithSubstituteRowsUsageComponent],
 declarations: [WithSubstituteRowsUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class WithSubstituteRowsUsageModule {
}
