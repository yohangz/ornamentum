import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { WithoutSubstituteRowsUsageComponent } from './without-substitute-rows-usage.component';

@NgModule({
 bootstrap: [WithoutSubstituteRowsUsageComponent],
 declarations: [WithoutSubstituteRowsUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class WithoutSubstituteRowsUsageModule {
}
