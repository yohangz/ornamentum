import { Component } from '@angular/core';

import { DataTableExampleDataModel } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-loading-spinner-template-usage',
  templateUrl: './loading-spinner-template-usage.component.html'
})
export class LoadingSpinnerTemplateUsageComponent {
  public items: DataTableExampleDataModel[];

  constructor(private dataFetchService: DataFetchService) {
    setTimeout(() => {
      this.items = this.dataFetchService.getTableData();
    }, 3000);
  }
}
