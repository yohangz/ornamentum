import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

import { DataTableSelectMode } from 'ornamentum';

import { Observable, of, Subscription } from 'rxjs/index';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-basic-usage',
  templateUrl: './basic-usage.component.html'
})
export class BasicUsageComponent implements OnInit, OnDestroy {
  public DataTableSelectMode = DataTableSelectMode;

  public dataSource: Observable<any>;
  private dataSubscription: Subscription;

  private interval: any;

  @Input()
  public parentElement: ElementRef;

  constructor(private dataFetchService: DataFetchService) {
    this.dataSource = of(this.dataFetchService.fetchData());
  }

  public ngOnInit(): void {
    this.interval = setInterval(() => {
      // this.dataSubscription = this.dataSource.subscribe((data: any[]) => {
      //   data.forEach((val, index) => {
      //     let date = val.retailerType;
      //     let newDate = new Date(date);
      //
      //     data[index].retailerType = new Date(newDate.setDate(newDate.getDate() + 1)).toUTCString();
      //
      //     data[index].year = Number(val.year) + 0.255;
      //   });
      // });
    }, 1000);
  }

  public ngOnDestroy(): void {
    clearInterval(this.interval);

    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }
}
