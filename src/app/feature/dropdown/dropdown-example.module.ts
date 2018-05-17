import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownBaseComponent } from './dropdown-main/components/dropdown-base/dropdown-base.component';

import { DropdownExampleRoutingModule } from './dropdown-example-routing.module';

/**
 * Module class for containing dropdown example module.
 * @class DropdownExampleModule
 */
@NgModule({
  declarations: [
    DropdownBaseComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    DropdownExampleRoutingModule
  ],
  providers: []
})
export class DropdownExampleModule {
}
