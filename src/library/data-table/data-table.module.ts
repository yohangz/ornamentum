import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DataTableColumnComponent } from './components/data-table-column/data-table-column.component';
import { DataTableHeaderComponent } from './components/data-table-header/data-table-header.component';
import { DataTableColGroupComponent } from './components/data-table-col-group/data-table-col-group.component';
import { DataTablePaginationComponent } from './components/data-table-pagination/data-table-pagination.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { DataTableBodyComponent } from './components/data-table-body/data-table-body.component';
import { DataTableColumnSelectorComponent } from './components/data-table-column-selector/data-table-column-selector.component';

import { ScrollPosition } from './directives/scroll-position.directive';
import { ScrollElement } from './directives/scroll-element.directive';
import { ElementWidth } from './directives/element-width.directive';

import { DataTableConfigService } from './services/data-table-config.service';
import { DataTableResourceFactoryService } from './services/data-table-resource-factory.service';

import { DropdownModule } from '../dropdown';
import { UtilityModule } from '../utility';

const COMPONENTS = [
  DataTableHeaderComponent,
  DataTableColumnComponent,
  DataTableColGroupComponent,
  DataTableBodyComponent,
  DataTablePaginationComponent,
  DataTableComponent,
  DataTableColumnSelectorComponent
];

const DIRECTIVES = [
  ScrollPosition,
  ScrollElement,
  ElementWidth
];

const PROVIDERS = [
  DataTableResourceFactoryService
];

/***
 * Module representing grid component.
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UtilityModule.forRoot(),
    DropdownModule.forRoot()
  ],
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
  providers: [
    ...PROVIDERS
  ],
  exports: [
    DataTableColumnComponent,
    DataTableComponent
  ],
  entryComponents: [
    DataTableColumnSelectorComponent
  ]
})
export class DataTableModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DataTableModule,
      providers: [DataTableConfigService]
    };
  }
}
