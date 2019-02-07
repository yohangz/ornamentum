import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DataTableModule } from 'ornamentum';

import { ShowColumnSelectorUsageComponent } from './show-column-selector-usage.component';

@NgModule({
  bootstrap: [ShowColumnSelectorUsageComponent],
  declarations: [ShowColumnSelectorUsageComponent],
  imports: [
      BrowserModule, 
      DataTableModule.forRoot()
    ]
})
export class ShowColumnSelectorUsageModule {
}
