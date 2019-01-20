import { Component } from '@angular/core';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-filtering-filter-debounce-usage',
  templateUrl: './filtering-filter-debounce-usage.component.html'
})
export class FilteringFilterDebounceUsageComponent {
  public dataSource: Observable<ExampleData[]>;

  constructor(private dataFetchService: DataFetchService) {
    this.dataSource = of(this.dataFetchService.fetchStaticData());
  }
}
