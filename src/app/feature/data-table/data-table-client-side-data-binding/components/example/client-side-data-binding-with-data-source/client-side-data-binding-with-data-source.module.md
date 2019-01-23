import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { ClientSideDataBindingWithDataSourceComponent } from './client-side-data-binding-with-data-source.component';

@NgModule({
 bootstrap: [ClientSideDataBindingWithDataSourceComponent],
 declarations: [ClientSideDataBindingWithDataSourceComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class ClientSideDataBindingWithDataSourceModule {
}
