import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilityConfigService } from './services/utility-config.service';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { PixelConverterPipe } from './pipes/pixel-converter.pipe';

const DIRECTIVES = [
  ClickOutsideDirective
];

const PIPES = [
  PixelConverterPipe
];


/***
 * Module representing utility components.
 */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...DIRECTIVES,
    ...PIPES
  ],
  exports: [
    ...DIRECTIVES,
    ...PIPES
  ]
})
export class UtilityModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UtilityModule,
      providers: [UtilityConfigService]
    };
  }
}
