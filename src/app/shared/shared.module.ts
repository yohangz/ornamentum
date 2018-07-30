import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { COMPONENTS, DIRECTIVES, SERVICES } from './index';

@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES
  ],
  exports: [
    ...COMPONENTS,
    ...DIRECTIVES
  ],
  providers: [
    ...SERVICES
  ]
})
export class SharedModule { }
