import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UtilityModule } from 'ornamentum';

import { COMPONENTS, SERVICES } from './index';

import { throwIfAlreadyLoaded } from './module-import.guard';

/**
 * Module class for containing core module.
 * @class AppCoreModule
 */
@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    UtilityModule.forRoot()
  ],
  providers: [
    ...SERVICES
  ]
})
export class AppCoreModule {
  constructor(@Optional() @SkipSelf() parentModule: AppCoreModule) {
    throwIfAlreadyLoaded(parentModule, 'AppCoreModule');
  }
}
