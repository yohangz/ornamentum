import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTableBaseComponent } from './data-table-main/components/data-table-base/data-table-base.component';

import { DataTableExampleRoutingModule } from './data-table-example-routing.module';

/**
 * Module class for containing data table example module.
 * @class DataTableExampleModule
 */
@NgModule({
  declarations: [DataTableBaseComponent],
  exports: [],
  imports: [
    CommonModule,
    DataTableExampleRoutingModule
  ],
  providers: []
})
export class DataTableExampleModule {
}
