import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { LoadingSpinnerTemplateUsageComponent } from './loading-spinner-template-usage.component';

@NgModule({
 bootstrap: [LoadingSpinnerTemplateUsageComponent],
 declarations: [LoadingSpinnerTemplateUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class LoadingSpinnerTemplateUsageModule {
}
