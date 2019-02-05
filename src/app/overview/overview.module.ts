import { NgModule } from '@angular/core';

import { DataTableModule } from 'ornamentum';

import { SharedModule } from '../shared/shared.module';
import { OverviewRoutingModule } from './overview-routing.module';

import { COMPONENTS } from './index';

/**
 * Module class for containing overview module.
 */
@NgModule({
  declarations: [...COMPONENTS],
  exports: [],
  imports: [
    OverviewRoutingModule,
    SharedModule.forRoot(),
    DataTableModule.forRoot({
      showColumnSelector: true
    })
  ],
  providers: []
})
export class OverviewModule {}
