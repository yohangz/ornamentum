import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DropdownConfig } from './models/dropdown-config.model';

import { DropdownComponent } from './components/dropdown/dropdown.component';
import { DropdownViewComponent } from './components/dropdown-view/dropdown-view.component';
import { DropdownFilterComponent } from './components/dropdown-filter/dropdown-filter.component';
import { DropdownOptionsComponent } from './components/dropdown-options/dropdown-options.component';

import { DROPDOWN_CONFIG } from './services/dropdown-config.service';

import { UtilityModule } from '../utility/utility.module';

const COMPONENTS = [DropdownComponent, DropdownViewComponent, DropdownFilterComponent, DropdownOptionsComponent];

/**
 * Module representing dropdown component
 */
@NgModule({
  imports: [CommonModule, FormsModule, UtilityModule.forRoot()],
  declarations: [...COMPONENTS],
  exports: [DropdownComponent],
  entryComponents: [DropdownViewComponent]
})
export class DropdownModule {
  /**
   * Set module root configuration overrides
   * @param dropdownConfig Dropdown configuration object
   * @return Module with custom providers
   */
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

export { DropdownTranslations } from './models/dropdown-translations.model';
export { DropdownOption } from './models/dropdown-option.model';
export { DropdownRequestParams } from './models/dropdown-request-params.model';
export { DropdownFilter } from './models/dropdown-filter.model';
export { DropdownDataBindCallback } from './models/dropdown-data-bind-callback.model';
export { DropdownQueryResult } from './models/dropdown-query-result.model';
export { DropdownConfig } from './models/dropdown-config.model';

export { DropdownSelectMode } from './models/dropdown-select-mode.model';

export { DropdownComponent } from './components/dropdown/dropdown.component';
