import { Component } from '@angular/core';

import { ExampleData } from 'helper-models';

import { DataFetchService } from 'helper-services';

/**
 * Advanced usage example component controller.
 */
@Component({
  selector: 'app-advanced-usage',
  templateUrl: './advanced-usage.component.html'
})
export class AdvancedUsageComponent {
  public data: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    // This method will set a array of 20 example data items to data variable.
    setTimeout(() => {
      this.data = this.dataFetchService.fetchStaticData(0, 20);
    }, 3000);
  }
}
