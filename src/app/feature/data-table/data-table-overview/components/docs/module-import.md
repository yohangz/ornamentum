import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { DataTableModule } from 'ornamentum';

import { AppComponent } from './app.component';
  
@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    DataTableModule.forRoot() // Import data table module
  ]
})
export class AppModule {
}
