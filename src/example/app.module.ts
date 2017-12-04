import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GridViewModule } from "../library/grid-view/grid-view.module";

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GridViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
