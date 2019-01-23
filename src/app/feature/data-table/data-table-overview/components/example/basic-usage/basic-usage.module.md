import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DataTableModule } from 'ornamentum';

import { BasicUsageComponent } from './basic-usage.component';

// Basic usage example module.
@NgModule({
  bootstrap: [BasicUsageComponent],
  declarations: [BasicUsageComponent],
  imports: [
    BrowserModule,
    DataTableModule.forRoot() // Import data table module with root configuration.
  ]
})
export class BasicUsageModule {
}
