import { Component, forwardRef, Inject } from '@angular/core';

import { DataTableComponent } from '../data-table/data-table.component';
import { DataTableColumnSelectorComponent } from '../data-table-column-selector/data-table-column-selector.component';
import { ComponentLoaderFactory } from '../../../utility';
import { ComponentLoader } from '../../../utility/services/component-loader.class';

/**
 * Data table header component.
 * @class DataTableHeaderComponent
 */
@Component({
  selector: 'ng-data-table-header',
  styleUrls: [ './data-table-header.component.scss' ],
  templateUrl: './data-table-header.component.html',
})
export class DataTableHeaderComponent {
  public componentLoader: ComponentLoader<DataTableColumnSelectorComponent>;

  constructor(@Inject(forwardRef(() => DataTableComponent)) public dataTable: DataTableComponent, private componentLoaderFactory: ComponentLoaderFactory) {
    this.componentLoader = this.componentLoaderFactory.createLoader<DataTableColumnSelectorComponent>()
  }

  /**
   * Toggle column selector.
   */
  public toggleColumnSelector(element: HTMLElement): void {
    this.componentLoader.toggle(DataTableColumnSelectorComponent, element, {
      props: {
        dataTable: this.dataTable
      }
    }, 0);
  }

  /**
   * Close column selector.
   */
  private closeColumnSelector(): void {
    this.componentLoader.hide();
  }
}
