import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { ServerSideDataBindingComponent } from './server-side-data-binding.component';

@NgModule({
 bootstrap: [ServerSideDataBindingComponent],
 declarations: [ServerSideDataBindingComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class ServerSideDataBindingModule {
}
