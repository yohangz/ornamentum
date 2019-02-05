import { Component } from '@angular/core';

import { Observable, of } from 'rxjs';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-show-refresh-button-usage',
  templateUrl: './show-refresh-button-usage.component.html'
})
export class ShowRefreshButtonUsageComponent {
  public dataSource: Observable<ExampleData[]>;

  constructor(private dataFetchService: DataFetchService) {
    const data: ExampleData[] = this.dataFetchService.fetchStaticData();
    this.dataSource = of(data);
  }
}
