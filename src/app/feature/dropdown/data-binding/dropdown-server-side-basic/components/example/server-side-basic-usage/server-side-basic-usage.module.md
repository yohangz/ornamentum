import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule, DropdownResourceModule } from 'ornamentum';
  
import { ServerSideDataBindingUsageComponent } from './server-side-basic-usage.component';

@NgModule({
 bootstrap: [ServerSideBasicUsageComponent],
 declarations: [ServerSideBasicUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot(),
    DropdownResourceModule
  ]
})
export class ServerSideBasicUsageModule {
}
