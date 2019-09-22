import { Component } from '@angular/core';

import { Observable, of } from 'rxjs';

import { ExampleData } from 'helper-models';

import { DataFetchService } from 'helper-services';

@Component({
  selector: 'app-option-filtering-usage',
  templateUrl: './option-filtering-usage.component.html'
})
export class OptionFilteringUsageComponent {
  public dataSource: Observable<ExampleData[]>;

  constructor(private dataFetchService: DataFetchService) {
    this.dataSource = of(this.dataFetchService.fetchStaticData());
  }
}
