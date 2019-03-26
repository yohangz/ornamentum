import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { SortingUsageComponent } from './sorting-usage.component';

@NgModule({
 bootstrap: [SortingUsageComponent],
 declarations: [SortingUsageComponent],
 imports: [
    BrowserModule,
    DataTableModule.forRoot()
  ]
})
export class SortingUsageModule {
}
