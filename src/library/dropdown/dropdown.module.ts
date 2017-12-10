import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const COMPONENTS = [
];

/***
 * Module representing dropdown component.
 */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
  ]
})
export class DropdownModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DropdownModule,
      providers: []
    };
  }
}
