import { Component } from '@angular/core';

import { ExampleDataModel } from '../../../../../../shared/models';

import { TableDataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-loading-spinner-template-usage',
  templateUrl: './loading-spinner-template-usage.component.html'
})
export class LoadingSpinnerTemplateUsageComponent {
  public items: ExampleDataModel[];

  constructor(private tableDataFetchService: TableDataFetchService) {
    setTimeout(() => {
      this.items = this.tableDataFetchService.getTableData();
    }, 3000);
  }
}
