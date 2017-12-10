import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './components/grid/grid.component';
import { GridConfigService } from './services/grid-config.service';

const COMPONENTS = [
  GridComponent
];

/***
 * Module representing grid component.
 */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    GridComponent
  ]
})
export class GridModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: GridModule,
      providers: [GridConfigService]
    };
  }
}
