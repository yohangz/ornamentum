import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { ShowRowExpandLoadingSpinnerUsageComponent } from './show-row-expand-loading-spinner-usage.component';
import { ShowRowExpandLoadingSpinnerDetailViewComponent } from './show-row-expand-loading-spinner-detail-view.component'

@NgModule({
 bootstrap: [ShowRowExpandLoadingSpinnerUsageComponent],
 declarations: [ShowRowExpandLoadingSpinnerUsageComponent, ShowRowExpandLoadingSpinnerDetailViewComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class ShowRowExpandLoadingSpinnerUsageModule {
}
