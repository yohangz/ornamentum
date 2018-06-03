import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { AppComponent } from './app.component';

@NgModule({
 bootstrap: [AppComponent],
 declarations: [AppComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class AppModule {
}
