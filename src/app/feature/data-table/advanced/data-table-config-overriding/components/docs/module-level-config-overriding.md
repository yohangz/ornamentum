import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';
import { DataTableConfigOverridingRoutingModule } from './data-table-config-overriding-routing.module';
import { DataTableConfigOverridingComponent } from './index';

@NgModule({
  declarations: [DataTableConfigOverridingComponent],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    // Module level configuration goes here
    // Module level configuration overrides both default and template level configurations. 
    DataTableModule.forRoot({
        showColumnSelector:  true,
        showHeader: true,
        sortable: true,
        filterable: true,
        columnResizable: true
    }),
    DataTableConfigOverridingRoutingModule
  ],
  providers: []
})
export class DataTableConfigOverridingModule {
}
