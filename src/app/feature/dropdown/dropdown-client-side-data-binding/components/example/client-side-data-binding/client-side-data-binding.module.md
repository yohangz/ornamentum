import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { ClientSideDataBindingComponent } from './client-side-data-binding.component';

@NgModule({
 bootstrap: [ClientSideDataBindingComponent],
 declarations: [ClientSideDataBindingComponent],
 imports: [BrowserModule, DropdownModule.forRoot()]
})
export class ClientSideDataBindingModule {
}
