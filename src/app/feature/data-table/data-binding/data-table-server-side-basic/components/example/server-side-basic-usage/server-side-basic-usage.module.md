import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { ServerSideHttpUsageComponent } from './server-side-basic-usage.component';

@NgModule({
 bootstrap: [ServerSideBasicUsageComponent],
 declarations: [ServerSideBasicUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot(),
    DataTableResourceModule
  ]
})
export class ServerSideBasicUsageModule {
}
