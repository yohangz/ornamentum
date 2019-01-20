import { Component, OnInit } from '@angular/core';

import { Observable, of, timer } from 'rxjs';
import { map } from 'rxjs/operators';

import { GlobalRefService, DataTableRow } from 'ornamentum';

import { ExampleData } from '../../../shared/models';

import { DataFetchService } from '../../../shared/services';

/**
 * Data table demo component.
 */
@Component({
  selector: 'app-data-table-demo',
  styleUrls: ['./data-table-demo.component.scss'],
  templateUrl: './data-table-demo.component.html'
})
export class DataTableDemoComponent implements OnInit {
  public dataSource: Observable<ExampleData[]>;

  constructor(private dataFetchService: DataFetchService, private globalRefService: GlobalRefService) {
  }

  /**
   * Component initialize lifecycle event.
   */
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

            return this.dataFetchService.fetchStaticData(offset, 20);
          })
        );
    } else {
      this.dataSource = of(this.dataFetchService.fetchStaticData(offset, 20));
    }
  }

  /**
   * High margin value if true.
   * @param row Data table row.
   */
  public isHighMargin(row: DataTableRow<ExampleData>): boolean {
    return row.item.grossMargin > .5;
  }

  /**
   * Order method type CSS class.
   * @param row Data table row.
   */
  public orderMethodType(row: DataTableRow<ExampleData>): string {
    switch (row.item.orderMethodType) {
      case 'Mail':
        return 'email-icon';
      case 'Web':
        return 'web-icon';
      case 'Telephone':
        return 'telephone-icon';
      case 'Fax':
        return 'fax-icon';
    }
  }
}
