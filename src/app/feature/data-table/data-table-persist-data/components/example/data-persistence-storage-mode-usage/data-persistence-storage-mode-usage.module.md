import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { DataPersistenceStorageModeUsageComponent } from './data-persistence-usage.component';

@NgModule({
 bootstrap: [DataPersistenceStorageModeUsageComponent],
 declarations: [DataPersistenceStorageModeUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class DataPersistenceUsageWithStorageModeModule {
}
