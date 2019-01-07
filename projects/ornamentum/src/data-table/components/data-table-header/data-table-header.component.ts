import { Component, Injector, Input, OnDestroy, Renderer2 } from '@angular/core';

import { ComponentLoader, PopoverComponentLoaderFactoryService } from '../../../utility/utility.module';

import { DataFetchMode } from '../../models/data-fetch-mode.enum';

import { DataTableColumnSelectorComponent } from '../data-table-column-selector/data-table-column-selector.component';
import { DataTableColumnComponent } from '../data-table-column/data-table-column.component';

import { DataTableConfigService } from '../../services/data-table-config.service';
import { DataTableEventStateService } from '../../services/data-table-event.service';
import { DataTableDataStateService } from '../../services/data-table-data-state.service';

/**
 * Data table header component
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
              private renderer: Renderer2,
              public dataStateService: DataTableDataStateService,
              public config: DataTableConfigService) {
    this.componentLoader = this.componentLoaderFactory.createLoader<DataTableColumnSelectorComponent>(this.renderer);
  }

  /**
   * Toggle column selector
   * @param element DOM element reference
   */
  public toggleColumnSelector(element: HTMLElement): void {
    this.componentLoader
      .toggle(DataTableColumnSelectorComponent, element, this.injector, {
        floatLeft: 2,
        relativeParent: this.config.relativeParentElement,
        context: {
          columns: this.columns
        },
        position: 'bottom-right'
      });
  }

  /**
   * On data reload click event handler
   */
  public onReload(): void {
    this.eventStateService.dataFetchStream.next(DataFetchMode.HARD_RELOAD);
  }

  /**
   * Component destroy lifecycle event handler
   */
  public ngOnDestroy(): void {
    this.componentLoader.dispose();
  }
}
