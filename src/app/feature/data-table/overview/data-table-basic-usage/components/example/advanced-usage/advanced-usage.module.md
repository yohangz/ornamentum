import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DataTableModule } from 'ornamentum';

import { AdvancedUsageComponent } from './advanced-usage.component';
import { AdvancedUsageExpandableDetailViewComponent } from './advanced-usage-expandable-detail-view.component';

// Advanced usage example module.
@NgModule({
  bootstrap: [AdvancedUsageComponent],
  declarations: [AdvancedUsageComponent, AdvancedUsageExpandableDetailViewComponent],
  imports: [
    BrowserModule,
    DataTableModule.forRoot() // Import data table module with root configuration.
  ]
})
export class AdvancedUsageModule {
}
