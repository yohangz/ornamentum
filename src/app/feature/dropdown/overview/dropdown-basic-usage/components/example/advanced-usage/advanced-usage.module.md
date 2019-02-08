import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DropdownModule } from 'ornamentum';

import { AdvancedUsageComponent } from './advanced-usage.component';

@NgModule({
  bootstrap: [AdvancedUsageComponent],
  declarations: [AdvancedUsageComponent],
  imports: [
    BrowserModule,
    DropdownModule.forRoot() // Import dropdown module with root configuration.
  ]
})
export class AdvancedUsageModule {
}
