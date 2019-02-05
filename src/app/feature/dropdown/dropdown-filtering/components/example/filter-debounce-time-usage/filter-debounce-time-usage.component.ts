import { Component } from '@angular/core';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-filter-debounce-time-usage',
  templateUrl: './filter-debounce-time-usage.component.html'
})
export class FilterDebounceTimeUsageComponent {
  public dataSource: Observable<ExampleData[]>;

  constructor(private dataFetchService: DataFetchService) {
    this.dataSource = of(this.dataFetchService.fetchStaticData());
  }
}
