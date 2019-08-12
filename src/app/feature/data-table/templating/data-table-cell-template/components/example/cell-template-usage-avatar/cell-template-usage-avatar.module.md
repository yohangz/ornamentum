import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { DataTableModule } from 'ornamentum';
  
import { CellTemplateUsageAvatarComponent } from './cell-template-usage-avatar.component';

@NgModule({
 bootstrap: [CellTemplateUsageAvatarComponent],
 declarations: [CellTemplateUsageAvatarComponent],
 imports: [
    BrowserModule, 
    DataTableModule.forRoot()
  ]
})
export class CellTemplateUsageAvatarModule {
}
