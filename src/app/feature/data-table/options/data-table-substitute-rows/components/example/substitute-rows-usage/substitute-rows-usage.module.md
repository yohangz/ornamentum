import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { SubstituteRowsUsageComponent } from './substitute-rows-usage.component';

@NgModule({
 bootstrap: [SubstituteRowsUsageComponent],
 declarations: [SubstituteRowsUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
   ]
})
export class SubstituteRowsUsageModule {
}
