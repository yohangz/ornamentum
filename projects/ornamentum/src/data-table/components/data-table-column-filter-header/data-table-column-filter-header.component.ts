import { Component, EventEmitter, Input, OnDestroy, OnInit } from '@angular/core';

import { Subscription, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { DataTableFilterEventArgs } from '../../models/data-table-filter-event-args.model';

import { DataFetchMode } from '../../models/data-fetch-mode.enum';

import { DataTableColumnComponent } from '../data-table-column/data-table-column.component';

import { DataTableConfigService } from '../../services/data-table-config.service';
import { DataTableEventStateService } from '../../services/data-table-event.service';

@Component({
  exportAs: 'ngDataTableColumnFilterHeader',
  // tslint:disable-next-line
  selector: '[ngDataTableColumnFilterHeader]',
  styleUrls: ['./data-table-column-filter-header.component.scss'],
  templateUrl: './data-table-column-filter-header.component.html'
})
export class DataTableColumnFilterHeaderComponent implements OnInit, OnDestroy {
  private columnFilterStream = new Subject();

  private customFilterSubscription: Subscription;
  private columnFilterSubscription: Subscription;

  public customFilterStream = new EventEmitter<DataTableFilterEventArgs>();

  @Input()
  public columns: DataTableColumnComponent[];

  constructor(public config: DataTableConfigService,
              private eventStateService: DataTableEventStateService) {
  }

  public ngOnInit(): void {
    this.initCustomFilterEvent();
    this.initDebounceDefaultFilterEvent();
  }

  public ngOnDestroy(): void {
    if (this.customFilterSubscription) {
      this.customFilterSubscription.unsubscribe();
    }

    if (this.columnFilterSubscription) {
      this.columnFilterSubscription.unsubscribe();
    }
  }

  private initCustomFilterEvent(): void {
    this.customFilterSubscription = this.customFilterStream
      .subscribe((filterEventArgs: DataTableFilterEventArgs) => {
        filterEventArgs.column.filter = filterEventArgs.filter;
        this.onFilter();
      });
  }

  private initDebounceDefaultFilterEvent(): void {
    this.columnFilterSubscription = this.columnFilterStream
      .pipe(
        debounceTime(this.config.filterDebounceTime)
      )
      .subscribe(() => {
        this.eventStateService.dataFetchStream.next(DataFetchMode.SOFT_LOAD);
      });
  }

  public onFilter(): void {
    if (this.config.filterDebounce) {
      this.columnFilterStream.next();
    } else {
      this.eventStateService.dataFetchStream.next(DataFetchMode.SOFT_LOAD);
    }
  }
}

