import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DropdownModule } from '../../../../library';

import { DropdownOverviewComponent } from './components/dropdown-overview/dropdown-overview.component';

import { DropdownFeatureRoutingModule } from './dropdown-feature-routing.module';

/**
 * Module class for containing dropdown feature module.
 * @class DropdownFeatureModule
 */
@NgModule({
  declarations: [
    DropdownOverviewComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule.forRoot(),
    DropdownFeatureRoutingModule
  ],
  providers: []
})
export class DropdownFeatureModule {
}
