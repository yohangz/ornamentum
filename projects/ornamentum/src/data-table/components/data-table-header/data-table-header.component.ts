import { Component, EventEmitter, Injector, Input, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/internal/Subscription';

import { ComponentLoader, PopoverComponentLoaderFactoryService } from '../../../utility/utility.module';

import { DataFetchMode } from '../../models/data-fetch-mode.enum';

import { DataTableColumnSelectorComponent } from '../data-table-column-selector/data-table-column-selector.component';
import { DataTableColumnComponent } from '../data-table-column/data-table-column.component';

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
export class DataTableHeaderComponent implements OnDestroy, OnInit {
  private componentLoader: ComponentLoader<DataTableColumnSelectorComponent>;

  @Input()
  public columns: DataTableColumnComponent[];

  private close = new EventEmitter<void>();
  private closeSubscription: Subscription;

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
      .withFloatLeft(element.offsetWidth + 2)
      .withFloatTop(element.offsetHeight)
      .withRelativeParentElement(this.config.relativeParentElement)
      .withContext({
        columns: this.columns,
        close: this.close
      })
      .toggle(DataTableColumnSelectorComponent, element, this.injector);
  }

  public onReload(): void {
    this.eventStateService.dataFetchStream.next(DataFetchMode.HARD_RELOAD);
  }

  public ngOnDestroy(): void {
    this.componentLoader.dispose();

    if (this.closeSubscription) {
      this.closeSubscription.unsubscribe();
    }
  }

  public ngOnInit(): void {
    this.closeSubscription = this.close.subscribe(() => {
      this.componentLoader.hide();
    });
  }
}
