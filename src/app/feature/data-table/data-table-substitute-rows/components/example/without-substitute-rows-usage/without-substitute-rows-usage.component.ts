import { Component } from '@angular/core';

import { DataTableExampleDataModel } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-without-substitute-rows-usage',
  templateUrl: './without-substitute-rows-usage.component.html'
})
export class WithoutSubstituteRowsUsageComponent {
  public items: DataTableExampleDataModel[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchData();
  }
}
