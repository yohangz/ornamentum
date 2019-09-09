import { Component } from '@angular/core';

import { ExampleData } from 'helper-models';

import { DataFetchService } from 'helper-services';

@Component({
  selector: 'app-substitute-rows-disabled-usage',
  templateUrl: './substitute-rows-disabled-usage.component.html'
})
export class SubstituteRowsDisabledUsageComponent {
  public items: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchStaticData(0, 5);
  }
}
