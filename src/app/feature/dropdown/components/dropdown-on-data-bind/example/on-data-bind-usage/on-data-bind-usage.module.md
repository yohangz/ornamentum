import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { OnDataBindUsageComponent } from './on-data-bind-usage.component';

@NgModule({
 bootstrap: [OnDataBindUsageComponent],
 declarations: [OnDataBindUsageComponent],
 imports: [BrowserModule, DataTableModule.forRoot()]
})
export class OnDataBindUsageModule {
}
