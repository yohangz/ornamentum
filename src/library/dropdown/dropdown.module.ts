import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UtilityModule } from '../utility/utility.module';

import { DropdownConfigService } from './services/dropdown-config.service';

import { DropdownComponent } from './components/dropdown/dropdown.component';
import { DropdownViewComponent } from './components/dropdown-view/dropdown-view.component';

const COMPONENTS = [
  DropdownComponent,
  DropdownViewComponent
];

/***
 * Module representing dropdown component.
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UtilityModule.forRoot()
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    DropdownComponent
  ],
  entryComponents: [
    DropdownViewComponent
  ]
})
export class DropdownModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DropdownModule,
      providers: [DropdownConfigService]
    };
  }
}
