import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppMainModule } from './main/main.module';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppMainModule,
    AppRoutingModule
  ],
  providers: []
})
export class AppModule {
}
