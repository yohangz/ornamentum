import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UtilityModule } from '../utility';
import { DropdownConfig } from './models/dropdown-config.model';

import { DropdownComponent } from './components/dropdown/dropdown.component';
import { DropdownViewComponent } from './components/dropdown-view/dropdown-view.component';

import { DROPDOWN_CONFIG } from './services/dropdown-config.service';

const COMPONENTS = [
  DropdownComponent,
  DropdownViewComponent
];

/**
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
  static forRoot(dropdownConfig?: DropdownConfig): ModuleWithProviders {
    return {
      ngModule: DropdownModule,
      providers: [
        {
          provide: DROPDOWN_CONFIG,
          useValue: dropdownConfig
        }
      ]
    };
  }
}
