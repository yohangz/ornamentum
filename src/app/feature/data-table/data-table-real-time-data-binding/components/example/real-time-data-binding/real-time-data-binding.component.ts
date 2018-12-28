import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-real-time-data-binding',
  templateUrl: './real-time-data-binding.component.html'
})
export class RealTimeDataBindingComponent implements OnInit {
  public dataSource: Observable<any>;

  constructor(private dataFetchService: DataFetchService) {
  }

  public ngOnInit(): void {
    let offset = 0;
    this.dataSource = Observable.create((observer) => {
      setInterval(() => {
        observer.next(this.dataFetchService.fetchData(offset++));
      }, 2000);
    });
  }
}
