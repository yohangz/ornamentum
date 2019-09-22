import { Component } from '@angular/core';

import { ExampleData } from 'helper-models';

import { DataFetchService } from 'helper-services';

@Component({
  selector: 'app-option-disabling-usage',
  templateUrl: './option-disabling-usage.component.html'
})
export class OptionDisablingUsageComponent {
  public options: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
  }

  public checkProductAvailability(): ExampleData[] {
    const options = this.dataFetchService.fetchStaticData(20, 10);

    if (options) {
      options.map((value: ExampleData) => {
        if (!value.availability) {
          return !value.availability;
        }
      });
      return options;
    }
  }
}
