import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DataTableModule } from 'ornamentum';

import { BasicUsageComponent } from './basic-usage.component';

// Basic usage example module.
@NgModule({
  bootstrap: [BasicUsageComponent],
  declarations: [BasicUsageComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    DataTableModule.forRoot() // Import data table module with root configuration.
  ]
})
export class BasicUsageModule {
}
