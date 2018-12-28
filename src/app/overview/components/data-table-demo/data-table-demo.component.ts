import { Component, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';

import { DataFetchService } from '../../../shared/services';

@Component({
  selector: 'app-data-table-demo',
  templateUrl: './data-table-demo.component.html'
})
export class DataTableDemoComponent implements OnInit {
  public dataSource: Observable<any>;

  constructor(private dataFetchService: DataFetchService) {
    this.dataSource = of(this.dataFetchService.fetchData(0, 15));
  }

  public ngOnInit(): void {
    let offset = 0;
    this.dataSource = Observable.create((observer) => {
      setInterval(() => {
        observer.next(this.dataFetchService.fetchData(offset++, 15));
      }, 2000);
    });
  }
}
