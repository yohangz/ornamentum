import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { DataPersistenceUsageComponent } from './data-persistence-usage.component';

@NgModule({
 bootstrap: [DataPersistenceUsageComponent],
 declarations: [DataPersistenceUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class DataPersistenceUsageModule {
}
