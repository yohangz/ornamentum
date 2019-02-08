import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { ServerSideWebSocketUsageComponent } from './server-side-web-socket-usage.component';

@NgModule({
 bootstrap: [ServerSideWebSocketUsageComponent],
 declarations: [ServerSideWebSocketUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot(),
    DropdownResourceModule
  ]
})
export class ServerSideWebSocketUsageModule {
}
