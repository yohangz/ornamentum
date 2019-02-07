import { Component } from '@angular/core';

import { Observable, of } from 'rxjs';

import { ExampleData } from 'helper-models';

import { DataFetchService } from 'helper-services';

@Component({
  selector: 'app-header-details-usage',
  templateUrl: './header-details-usage.component.html'
})
export class HeaderDetailsUsageComponent {
  public dataSource: Observable<ExampleData[]>;

  constructor(private dataFetchService: DataFetchService) {
    const data: ExampleData[] = this.dataFetchService.fetchStaticData();
    this.dataSource = of(data);
  }
}
