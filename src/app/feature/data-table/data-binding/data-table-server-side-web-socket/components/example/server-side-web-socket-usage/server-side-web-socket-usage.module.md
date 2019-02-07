import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { ServerSideWebSocketUsageComponent } from './server-side-web-socket-usage.component';

@NgModule({
 bootstrap: [ServerSideWebSocketUsageComponent],
 declarations: [ServerSideWebSocketUsageComponent],
 imports: [
    BrowserModule,
    DataTableModule.forRoot(),
    DataTableResourceModule
  ]
})
export class ServerSideWebSocketUsageModule {
}
