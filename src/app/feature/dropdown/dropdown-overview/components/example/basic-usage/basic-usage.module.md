import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DropdownModule } from 'ornamentum';

import { BasicUsageComponent } from './basic-usage.component';

@NgModule({
  bootstrap: [BasicUsageComponent],
  declarations: [BasicUsageComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    DropdownModule.forRoot() // Import dropdown module with root configuration.
  ]
})
export class BasicUsageModule {
}
