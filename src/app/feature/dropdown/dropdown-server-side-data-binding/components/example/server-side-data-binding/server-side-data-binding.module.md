import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule, DropdownResourceModule } from 'ornamentum';
  
import { ServerSideDataBindingComponent } from './server-side-data-binding.component';

@NgModule({
 bootstrap: [ServerSideDataBindingComponent],
 declarations: [ServerSideDataBindingComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot(),
    DropdownResourceModule
  ]
})
export class ServerSideDataBindingModule {
}
