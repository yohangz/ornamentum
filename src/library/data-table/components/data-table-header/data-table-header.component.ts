import { Component, forwardRef, Inject, OnDestroy } from '@angular/core';

import { DataTableComponent } from '../data-table/data-table.component';
import { DataTableColumnSelectorComponent } from '../data-table-column-selector/data-table-column-selector.component';

import { ComponentLoaderFactoryService, ComponentLoader } from '../../../utility';

/**
 * Data table header component.
 * @class DataTableHeaderComponent
 */
@Component({
  selector: 'ng-data-table-header',
  styleUrls: ['./data-table-header.component.scss'],
  templateUrl: './data-table-header.component.html',
})
export class DataTableHeaderComponent implements OnDestroy {
  private componentLoader: ComponentLoader<DataTableColumnSelectorComponent>;

  constructor(@Inject(forwardRef(() => DataTableComponent)) public dataTable: DataTableComponent,
              private componentLoaderFactory: ComponentLoaderFactoryService) {
    this.componentLoader = this.componentLoaderFactory.createLoader<DataTableColumnSelectorComponent>();
  }

  /**
   * Toggle column selector.
   */
  public toggleColumnSelector(element: HTMLElement): void {
    this.componentLoader
      .withFloatLeft(element.offsetWidth + 10)
      .withFloatTop(element.offsetHeight + 5)
      .withRelativeParentElement(this.dataTable.relativeParentElement)
      .withContext({
        props: {
          dataTable: this.dataTable,
        }
      })
      .toggle(DataTableColumnSelectorComponent, element);
  }

  /**
   * Close column selector.
   */
  public closeColumnSelector(): void {
    this.componentLoader.hide();
  }

  public ngOnDestroy(): void {
    this.componentLoader.dispose();
  }
}
