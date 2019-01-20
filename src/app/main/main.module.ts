import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { DataTableModule } from 'ornamentum';

import { AppCoreModule } from '../core/core.module';

import { COMPONENTS } from './index';

import { BaseComponent } from './components';

/**
 * Module class for containing main module.
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
    CommonModule,
    FormsModule,
    DataTableModule.forRoot({
      showColumnSelector: true
    }),
  ]
})
export class AppMainModule {
}
