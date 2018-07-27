import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { COMPONENTS, SERVICES } from './index';

/**
 * Module class for containing shared components, directives & services.
 * @class SharedModule
 */
@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  declarations: [
    ...COMPONENTS,
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        ...SERVICES
      ]
    };
  }
}
