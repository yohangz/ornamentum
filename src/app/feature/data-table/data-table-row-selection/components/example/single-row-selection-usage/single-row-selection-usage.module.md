import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { SingleRowSelectionUsageComponent } from './single-row-selection-usage.component';

@NgModule({
 bootstrap: [SingleRowSelectionUsageComponent],
 declarations: [SingleRowSelectionUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class SingleRowSelectionUsageModule {
}
