import { Component, EventEmitter, Injector, Input, OnDestroy, Output } from '@angular/core';

import { DataTableColumnSelectorComponent } from '../data-table-column-selector/data-table-column-selector.component';
import { DataTableColumnComponent } from '../data-table-column/data-table-column.component';

import { PopoverComponentLoaderFactoryService, ComponentLoader } from '../../../utility';
import { DataTableConfigService } from '../../services/data-table-config.service';

/**
 * Data table header component.
 * @class DataTableHeaderComponent
 */
@Component({
  selector: 'ng-data-table-header',
  styleUrls: ['./data-table-header.component.scss'],
  templateUrl: './data-table-header.component.html'
})
export class DataTableHeaderComponent implements OnDestroy {
  private componentLoader: ComponentLoader<DataTableColumnSelectorComponent>;

  @Input()
  public reloading: boolean;

  @Input()
  public columns: DataTableColumnComponent;

  @Output()
  public reload = new EventEmitter();

  constructor(private componentLoaderFactory: PopoverComponentLoaderFactoryService,
              private injector: Injector,
              public config: DataTableConfigService) {
    this.componentLoader = this.componentLoaderFactory.createLoader<DataTableColumnSelectorComponent>();
  }

  /**
   * Toggle column selector.
   */
  public toggleColumnSelector(element: HTMLElement): void {
    this.componentLoader
      .withFloatLeft(element.offsetWidth + 10)
      .withFloatTop(element.offsetHeight + 5)
      .withRelativeParentElement(this.config.relativeParentElement)
      .withContext({
        columns: this.columns
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
