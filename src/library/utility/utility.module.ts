import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilityConfigService } from './services/utility-config.service';

const COMPONENTS = [];

/***
 * Module representing utility components.
 */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: []
})
export class UtilityModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UtilityModule,
      providers: [UtilityConfigService]
    };
  }
}
