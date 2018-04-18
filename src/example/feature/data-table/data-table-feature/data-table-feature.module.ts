import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from '../../../../library';

import { DataTableOverviewComponent } from './components/data-table-overview/data-table-overview.component';
import { DataTableFilteringComponent } from './components/data-table-filtering/data-table-filtering.component';

import { DataStorageService } from './services/data-storage.service';

import { DataTableFeatureRoutingModule } from './data-table-feature-routing.module';

/**
 * Module class for containing data table feature module.
 * @class DataTableFeatureModule
 */
@NgModule({
  declarations: [
    DataTableOverviewComponent,
    DataTableFilteringComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    DataTableModule.forRoot({
      showColumnSelector: true
    }),
    DataTableFeatureRoutingModule
  ],
  providers: [DataStorageService]
})
export class DataTableFeatureModule {
}
