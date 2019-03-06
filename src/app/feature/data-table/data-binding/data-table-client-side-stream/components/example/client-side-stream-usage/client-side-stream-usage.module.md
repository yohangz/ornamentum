import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { ClientSideStreamUsageComponent } from './client-side-stream-usage.component';

@NgModule({
 bootstrap: [ClientSideStreamUsageComponent],
 declarations: [ClientSideStreamUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot() // Import data table module
  ]
})
export class ClientSideStreamUsageModule {
}
