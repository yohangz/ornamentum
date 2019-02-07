import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { StatePersistenceUsageComponent } from './state-persistence-usage.component';

@NgModule({
 bootstrap: [StatePersistenceUsageComponent],
 declarations: [StatePersistenceUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class StatePersistenceUsageModule {
}
