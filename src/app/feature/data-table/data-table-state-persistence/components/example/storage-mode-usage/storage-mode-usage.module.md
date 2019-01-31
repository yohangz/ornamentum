import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { StorageModeUsageComponent } from './storage-mode-usage.component';

@NgModule({
 bootstrap: [StorageModeUsageComponent],
 declarations: [StorageModeUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class StorageModeUsageModule {
}
