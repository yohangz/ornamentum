import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { ClientSideDataBindingComponent } from './client-side-data-binding.component';

@NgModule({
 bootstrap: [ClientSideDataBindingComponent],
 declarations: [ClientSideDataBindingComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class ClientSideDataBindingModule {
}
