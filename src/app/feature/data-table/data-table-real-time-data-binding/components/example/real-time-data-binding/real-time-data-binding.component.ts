import { Component, ElementRef, Input } from '@angular/core';

import { Subscription } from 'rxjs/index';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { DataFetchService } from '../../../../../../shared/services';

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

  constructor(private dataFetchService: DataFetchService) {
    this.dataSource = of(this.dataFetchService.fetchData());
  }

  public ngOnInit(): void {
    this.interval = setInterval(() => {
      this.dataSubscription = this.dataSource.subscribe((data: any[]) => {
        data.forEach((val, index) => {
          let date = val.retailerType;
          let newDate = new Date(date);

          data[index].retailerType = new Date(newDate.setDate(newDate.getDate() + 1)).toUTCString();

          data[index].year = Number(val.year) + 0.25;
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
