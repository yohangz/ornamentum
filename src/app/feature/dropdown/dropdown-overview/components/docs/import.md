 
  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';

  import { DropdownModule } from 'ornamentum';

  import { AppComponent } from './app.component';

  @NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    imports: [BrowserModule, DropdownModule.forRoot()]
  })
  export class AppModule {
  }
 
