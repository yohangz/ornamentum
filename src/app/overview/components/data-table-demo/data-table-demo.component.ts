import { Component, OnInit } from '@angular/core';

import { timer, of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DataFetchService } from '../../../shared/services';
import { ExampleData } from '../../../shared/models';
import { GlobalRefService } from 'ornamentum';

@Component({
  selector: 'app-data-table-demo',
  templateUrl: './data-table-demo.component.html'
})
export class DataTableDemoComponent implements OnInit {
  public dataSource: Observable<ExampleData[]>;

  constructor(private dataFetchService: DataFetchService, private globalRefService: GlobalRefService) {
  }

  public ngOnInit(): void {
    let offset = 0;
    if (this.globalRefService.isBrowser) {
      this.dataSource = timer(0, 2000)
        .pipe(
          map(() => {
            offset += 20;
            if (offset >= 100) {
              offset = 0;
            }

            return this.dataFetchService.fetchData(offset, 20);
          })
        );
    } else {
      this.dataSource = of(this.dataFetchService.fetchData(offset, 20));
    }
  }
}
