import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DataTableModule } from 'ornamentum';

import { SortFieldUsageComponent } from './sort-field-usage.component';

@NgModule({
  bootstrap: [SortFieldUsageComponent],
  declarations: [SortFieldUsageComponent],
  imports: [
      BrowserModule, 
      DataTableModule.forRoot()
    ]
})
export class SortFieldUsageModule {
}
