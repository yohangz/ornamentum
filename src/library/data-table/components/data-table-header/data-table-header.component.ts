import { Component, forwardRef, Inject, Injector, OnDestroy } from '@angular/core';

import { DataTableComponent } from '../data-table/data-table.component';
import { DataTableColumnSelectorComponent } from '../data-table-column-selector/data-table-column-selector.component';

import { PopoverComponentLoaderFactoryService, ComponentLoader } from '../../../utility';
import { DataTableConfigService } from '../../services/data-table-config.service';

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
              private componentLoaderFactory: PopoverComponentLoaderFactoryService,
              private config: DataTableConfigService,
              private injector: Injector) {
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
        columns: this.dataTable.columns
      })
      .toggle(DataTableColumnSelectorComponent, element, this.injector);
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
