import { Component } from '@angular/core';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-loading-spinner-template-usage',
  templateUrl: './loading-spinner-template-usage.component.html'
})
export class LoadingSpinnerTemplateUsageComponent {
  public items: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    setTimeout(() => {
      this.items = this.dataFetchService.fetchData();
    }, 3000);
  }
}
