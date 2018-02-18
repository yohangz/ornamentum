import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

import { FilterEventArgs } from '../../models/filter-event-args.model';

import { DataTableConfigService } from '../../services/data-table-config.service';

import { DataTableColumnComponent } from '../data-table-column/data-table-column.component';

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

  @Output()
  public fetchData = new EventEmitter();

  constructor(public config: DataTableConfigService) {
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
        this.fetchData.next(false);
      });
  }

  public onFilter(): void {
    if (this.config.filterDebounce) {
      this.columnFilterStream.next();
    } else {
      this.fetchData.next(false);
    }
  }
}

