import { Component, Injector, Input, OnDestroy } from '@angular/core';

import { DataFetchMode } from '../../models/data-fetch-mode.enum';

import { DataTableColumnSelectorComponent } from '../data-table-column-selector/data-table-column-selector.component';
import { DataTableColumnComponent } from '../data-table-column/data-table-column.component';

import { PopoverComponentLoaderFactoryService, ComponentLoader } from '../../../utility/utility.module';
import { DataTableConfigService } from '../../services/data-table-config.service';
import { DataTableEventStateService } from '../../services/data-table-event.service';
import { DataTableDataStateService } from '../../services/data-table-data-state.service';

/**
 * Data table header component.
 * @class DataTableHeaderComponent
 */
@Component({
  selector: 'ng-data-table-header',
  templateUrl: './data-table-header.component.html'
})
export class DataTableHeaderComponent implements OnDestroy {
  private componentLoader: ComponentLoader<DataTableColumnSelectorComponent>;

  @Input()
  public columns: DataTableColumnComponent[];

  constructor(private componentLoaderFactory: PopoverComponentLoaderFactoryService,
              private injector: Injector,
              private eventStateService: DataTableEventStateService,
              public dataStateService: DataTableDataStateService,
              public config: DataTableConfigService) {
    this.componentLoader = this.componentLoaderFactory.createLoader<DataTableColumnSelectorComponent>();
  }

  /**
   * Toggle column selector.
   */
  public toggleColumnSelector(element: HTMLElement): void {
    this.componentLoader
      .withFloatLeft(element.offsetWidth + 25)
      .withFloatTop(element.offsetHeight + 20)
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

  public onReload(): void {
    this.eventStateService.dataFetchStream.next(DataFetchMode.HARD_RELOAD);
  }
}
