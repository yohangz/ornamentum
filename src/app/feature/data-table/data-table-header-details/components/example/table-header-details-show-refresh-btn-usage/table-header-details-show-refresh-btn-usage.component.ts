import { Component } from '@angular/core';

import { Observable, of } from 'rxjs';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-table-header-details-show-refresh-btn-usage',
  templateUrl: './table-header-details-show-refresh-btn-usage.component.html'
})
export class TableHeaderDetailsShowRefreshBtnUsageComponent {
  public dataSource: Observable<ExampleData[]>;

  constructor(private dataFetchService: DataFetchService) {
    const data: ExampleData[] = this.dataFetchService.fetchStaticData();
    this.dataSource = of(data);
  }
}
