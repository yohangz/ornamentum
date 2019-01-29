import { Component } from '@angular/core';

import { ExampleData } from 'helper-models';

import { DataFetchService } from 'helper-services';

/**
 * Basic usage example component controller.
 */
@Component({
  selector: 'app-basic-usage',
  templateUrl: './basic-usage.component.html'
})
export class BasicUsageComponent {
  public data: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    // This method will set a array of 20 example data items to data variable.
    setTimeout(() => {
      this.data = this.dataFetchService.fetchStaticData(0, 20);
    }, 3000);
  }
}
