import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule, DataTableResourceModule } from 'ornamentum';
  
import { ServerSideDataBindingComponent } from './server-side-data-binding.component';

@NgModule({
 bootstrap: [ServerSideDataBindingComponent],
 declarations: [ServerSideDataBindingComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot(),
    DataTableResourceModule
  ]
})
export class ServerSideDataBindingModule {
}
