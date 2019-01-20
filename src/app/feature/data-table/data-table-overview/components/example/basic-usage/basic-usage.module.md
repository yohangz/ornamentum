import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
  
import { DataTableModule } from 'ornamentum';
  
import { BasicUsageComponent } from './basic-usage.component';

/**
 * Basic usage example module.
 */
@NgModule({
 bootstrap: [BasicUsageComponent],
 declarations: [BasicUsageComponent],
 imports: [
   CommonModule,
   FormsModule,
   DataTableModule.forRoot() // Import data table module with root configuration.
 ]
})
export class BasicUsageModule {
}
