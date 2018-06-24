import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppCoreModule } from '../core/core.module';

import { COMPONENTS } from './index';

import { BaseComponent } from './components';

/**
 * Module class for containing main module.
 * @class AppMainModule
 */
@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    BaseComponent
  ],
  imports: [
    AppCoreModule,
    RouterModule,
    CommonModule
  ]
})
export class AppMainModule {
}
