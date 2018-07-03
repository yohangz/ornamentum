import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { SingleToggleRowSelectionUsageComponent } from './single-toggle-row-selection-usage.component';

@NgModule({
 bootstrap: [SingleToggleRowSelectionUsageComponent],
 declarations: [SingleToggleRowSelectionUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class SingleToggleRowSelectionUsageModule {
}
