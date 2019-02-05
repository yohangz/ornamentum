import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { WrapDisplaySelectLimitUsageComponent } from './wrap-display-select-limit-usage.component.component';

@NgModule({
 bootstrap: [WrapDisplaySelectLimitUsageComponent],
 declarations: [WrapDisplaySelectLimitUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class WrapDisplaySelectLimitUsageModule {
}
