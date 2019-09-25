import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UtilityModule } from 'ornamentum';

import { throwIfAlreadyLoaded } from './module-import.guard';

import { SeoGuard } from './seo.guard';

import { COMPONENTS, SERVICES, DIRECTIVES } from './index';

/**
 * Module class for containing core module.
 */
@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES],
  exports: [...COMPONENTS],
  imports: [CommonModule, RouterModule, HttpClientModule, UtilityModule.forRoot()],
  providers: [...SERVICES, SeoGuard]
})
export class AppCoreModule {
  constructor(@Optional() @SkipSelf() parentModule: AppCoreModule) {
    throwIfAlreadyLoaded(parentModule, 'AppCoreModule');
  }
}
