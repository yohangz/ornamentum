import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { SelectTrackByUsageComponent } from './select-track-by-usage.component';

@NgModule({
 bootstrap: [SelectTrackByUsageComponent],
 declarations: [SelectTrackByUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class SelectTrackByUsageModule {
}
