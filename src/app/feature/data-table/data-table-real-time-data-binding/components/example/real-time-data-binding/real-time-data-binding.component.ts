import { Component, ElementRef, Input } from '@angular/core';

import { Subscription } from 'rxjs/index';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { TableDataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-real-time-data-binding',
  templateUrl: './real-time-data-binding.component.html'
})
export class RealTimeDataBindingComponent {
  public dataSource: Observable<any>;
  private dataSubscription: Subscription;

  private interval: any;

  @Input()
  public parentElement: ElementRef;

  constructor(private tableDataFetchService: TableDataFetchService) {
    this.dataSource = of(this.tableDataFetchService.getTableData());
  }

  public ngOnInit(): void {
    this.interval = setInterval(() => {
      this.dataSubscription = this.dataSource.subscribe((data: any[]) => {
        data.forEach((val, index) => {
          let date = val.time_stamp;
          let newDate = new Date(date);

          data[index].time_stamp = new Date(newDate.setDate(newDate.getDate() + 1)).toUTCString();

          data[index].price = Number(val.price) + 0.25;
        });
      });
    }, 100);
  }

  public ngOnDestroy(): void {
    clearInterval(this.interval);

    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }
}
