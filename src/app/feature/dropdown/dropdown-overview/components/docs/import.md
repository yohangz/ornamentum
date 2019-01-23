import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { DropdownModule } from 'ornamentum';

import { AppComponent } from './app.component';
  
@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    DropdownModule.forRoot() // Import dropdown module
  ]
})
export class AppModule {
}
