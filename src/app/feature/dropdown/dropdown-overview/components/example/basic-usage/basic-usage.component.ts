import { Component } from '@angular/core';

import { DataFetchService } from 'helper-services';
import { ExampleData } from 'helper-models';

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
    this.data = this.dataFetchService.fetchStaticData(0, 20);
  }
}
