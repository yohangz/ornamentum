import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { ServerSideDataBindingUsageComponent } from './server-side-data-binding-usage.component';

@NgModule({
 bootstrap: [ServerSideDataBindingUsageComponent],
 declarations: [ServerSideDataBindingUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class ServerSideDataBindingUsageModule {
}
