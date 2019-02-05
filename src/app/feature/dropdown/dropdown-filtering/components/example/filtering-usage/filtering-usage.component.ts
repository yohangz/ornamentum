import { Component } from '@angular/core';

import { ExampleData } from 'helper-models';

import { DataFetchService } from 'helper-services';

import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-filtering-usage',
  templateUrl: './filtering-usage.component.html'
})
export class FilteringUsageComponent {
  public dataSource: Observable<ExampleData[]>;

  constructor(private dataFetchService: DataFetchService) {
    this.dataSource = of(this.dataFetchService.fetchStaticData());
  }
}
