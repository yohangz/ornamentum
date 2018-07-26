import { NgModule } from '@angular/core';

import { DataTableModule } from 'ornamentum';

import { COMPONENTS } from './index';

import { OverviewRoutingModule } from './overview-routing.module';

/**
 * Module class for containing overview module.
 * @class overview
 */
@NgModule({
  declarations: [...COMPONENTS],
  exports: [],
  imports: [
    OverviewRoutingModule,
    DataTableModule.forRoot({
      showColumnSelector: true
    }),
  ],
  providers: []
})
export class OverviewModule {
}
