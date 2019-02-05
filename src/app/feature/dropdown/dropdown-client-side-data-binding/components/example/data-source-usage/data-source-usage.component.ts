import { Component } from '@angular/core';

import { Observable, of } from 'rxjs';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-data-source-usage',
  templateUrl: './data-source-usage.component.html'
})
export class DataSourceUsageComponent {
  public dataSource: Observable<ExampleData[]>;

  constructor(private dataFetchService: DataFetchService) {
    this.dataSource = of(this.dataFetchService.fetchStaticData(0, 20));
  }
}
