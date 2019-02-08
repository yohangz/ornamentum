import { Component } from '@angular/core';

import { Observable, of } from 'rxjs';

import { ExampleData } from 'helper-models';

import { DataFetchService } from 'helper-services';

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
