import { Component } from '@angular/core';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-filtering-usage',
  templateUrl: './filtering-usage.component.html'
})
export class FilteringUsageComponent {
  public dataSource: Observable<ExampleData[]>;

  constructor(private dataFetchService: DataFetchService) {
    this.dataSource = of(this.dataFetchService.fetchData());
  }
}
