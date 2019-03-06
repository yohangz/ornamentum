import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { ServerSideHttpUsageComponent } from './server-side-basic-usage.component';

@NgModule({
 bootstrap: [ServerSideBasicUsageComponent],
 declarations: [ServerSideBasicUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot(), // Import data table module
    DataTableResourceModule // Import data table resource module
  ]
})
export class ServerSideBasicUsageModule {
}
