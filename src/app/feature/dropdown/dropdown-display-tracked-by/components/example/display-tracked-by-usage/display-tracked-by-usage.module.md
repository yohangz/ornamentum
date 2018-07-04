import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { DisplayTrackedByUsageComponent } from './display-tracked-by-usage.component';

@NgModule({
 bootstrap: [DisplayTrackedByUsageComponent],
 declarations: [DisplayTrackedByUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class DisplayTrackedByUsageModule {
}
