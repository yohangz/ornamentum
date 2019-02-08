import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { ClientSideStreamUsageComponent } from './client-side-stream-usage.component';

@NgModule({
 bootstrap: [ClientSideStreamUsageComponent],
 declarations: [ClientSideStreamUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class ClientSideStreamUsageModule {
}
