import { Component, OnInit } from '@angular/core';

import { Observable, of, timer } from 'rxjs';
import { map } from 'rxjs/operators';

import { GlobalRefService, DataTableRow } from 'ornamentum';

import { ExampleData } from '../../../shared/models';

import { DataFetchService } from '../../../shared/services';

@Component({
  selector: 'app-data-table-demo',
  styleUrls: ['./data-table-demo.component.scss'],
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

  public isHighMargin(row: DataTableRow<ExampleData>): boolean {
    return row.item.grossMargin > .5;
  }

  public isLowMargin(row: DataTableRow<ExampleData>): boolean {
    return row.item.grossMargin < .5;
  }
}
