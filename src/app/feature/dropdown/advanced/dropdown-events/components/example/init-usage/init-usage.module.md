import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DropdownModule } from 'ornamentum';
  
import { InitUsageComponent } from './init-usage.component';

@NgModule({
 bootstrap: [InitUsageComponent],
 declarations: [InitUsageComponent],
 imports: [
    BrowserModule, 
    DropdownModule.forRoot()
  ]
})
export class InitUsageModule {
}
