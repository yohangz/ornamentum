import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { ClientSideDataBindingWithItemsComponent } from './client-side-data-binding-with-items.component';

@NgModule({
 bootstrap: [ClientSideDataBindingWithItemsComponent],
 declarations: [ClientSideDataBindingWithItemsComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class ClientSideDataBindingWithItemsModule {
}
