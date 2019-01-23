import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DataTableModule } from 'ornamentum';

import { AppComponent } from './app.component';

// App component module  
@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DataTableModule.forRoot() // Import data table module with root configuration.
  ]
})
export class AppModule {
}
