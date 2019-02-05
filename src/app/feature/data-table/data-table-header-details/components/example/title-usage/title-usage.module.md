import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DataTableModule } from 'ornamentum';

import { TitleUsageComponent } from './title-usage.component';

@NgModule({
  bootstrap: [TitleUsageComponent],
  declarations: [TitleUsageComponent],
  imports: [
      BrowserModule, 
      DataTableModule.forRoot()
    ]
})
export class TitleUsageModule {
}
