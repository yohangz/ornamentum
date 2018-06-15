import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { MultiItemWrappedSelectionUsageComponent } from './multi-item-wrapped-selection-usage.component';

@NgModule({
 bootstrap: [MultiItemWrappedSelectionUsageComponent],
 declarations: [MultiItemWrappedSelectionUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class MultiItemWrappedSelectionUsageModule {
}
