import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { CellTemplateAvatarUsageComponent } from './cell-template-usage-avatar.component';

@NgModule({
 bootstrap: [CellTemplateAvatarUsageComponent],
 declarations: [CellTemplateAvatarUsageComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class CellTemplateUsageAvatarModule {
}
