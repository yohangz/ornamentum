import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { MultiSelectOptionMaxWidthUsageComponent } from './multi-select-option-max-width-usage.component';

@NgModule({
 bootstrap: [MultiSelectOptionMaxWidthUsageComponent],
 declarations: [MultiSelectOptionMaxWidthUsageComponent],
 imports: [
    BrowserModule,
    DropdownModule.forRoot()
  ]
})
export class MultiSelectOptionMaxWidthUsageCModule {
}
