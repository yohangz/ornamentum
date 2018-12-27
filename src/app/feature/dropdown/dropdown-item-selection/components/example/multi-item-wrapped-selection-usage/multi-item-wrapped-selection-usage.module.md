import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { MultiItemWrappedSelectionUsageComponent } from './multi-item-wrapped-selection-usage.component';

@NgModule({
 bootstrap: [MultiItemWrappedSelectionUsageComponent],
 declarations: [MultiItemWrappedSelectionUsageComponent],
 imports: [BrowserModule, DropdownModule.forRoot()]
})
export class MultiItemWrappedSelectionUsageModule {
}
