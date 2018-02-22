import { Component, EventEmitter, Input, OnDestroy, OnInit } from '@angular/core';

import { FilterEventArgs } from '../../models/filter-event-args.model';

import { DataTableColumnComponent } from '../data-table-column/data-table-column.component';

import { DataTableConfigService } from '../../services/data-table-config.service';
import { DataTableEventStateService } from '../../services/data-table-event.service';

import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';

@Component({
  exportAs: 'ngDataTableColumnFilterHeader',
  selector: '[ngDataTableColumnFilterHeader]',
  styleUrls: ['./data-table-column-filter-header.component.scss'],
  templateUrl: './data-table-column-filter-header.component.html'
})
export class DataTableColumnFilterHeaderComponent implements OnInit, OnDestroy {
  private columnFilterStream = new Subject();

  private customFilterSubscription: Subscription;
  private columnFilterSubscription: Subscription;

  public customFilterStream = new EventEmitter<FilterEventArgs>();

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
      .subscribe((filterEventArgs: FilterEventArgs) => {
        filterEventArgs.column.filter = filterEventArgs.filter;
        this.onFilter();
      });
  }

  private initDebounceDefaultFilterEvent(): void {
    this.columnFilterSubscription = this.columnFilterStream
      .debounceTime(this.config.filterDebounceTime)
      .subscribe(() => {
        this.eventStateService.dataFetchStream.next(false);
      });
  }

  public onFilter(): void {
    if (this.config.filterDebounce) {
      this.columnFilterStream.next();
    } else {
      this.eventStateService.dataFetchStream.next(false);
    }
  }
}

