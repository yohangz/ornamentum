import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DataTableModule } from 'ornamentum';

import { AppComponent } from './app.component';

// App component module  
@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  // Refer https://angular.io/guide/frequent-ngmodules about module usages.
  imports: [
    BrowserModule, // Optional module
    CommonModule, // Optional module
    FormsModule, // Optional module
    DataTableModule.forRoot() // Import data table module with root configuration.
  ]
})
export class AppModule {
}
