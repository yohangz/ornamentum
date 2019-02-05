import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule, DropdownResourceModule } from 'ornamentum';
  
import { ServerSideDataBindingUsageComponent } from './server-side-data-binding-usage.component';

@NgModule({
 bootstrap: [ServerSideDataBindingUsageComponent],
 declarations: [ServerSideDataBindingUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot(),
    DropdownResourceModule
  ]
})
export class ServerSideDataBindingUsageModule {
}
