import { Component } from '@angular/core';

import { ExampleData } from 'helper-models';

import { DataFetchService } from 'helper-services';

@Component({
  selector: 'app-wrap-display-select-limit-usage',
  templateUrl: './wrap-display-select-limit-usage.component.html'
})
export class WrapDisplaySelectLimitUsageComponent {
  public options: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    this.options = this.dataFetchService.fetchStaticData();
  }
}
