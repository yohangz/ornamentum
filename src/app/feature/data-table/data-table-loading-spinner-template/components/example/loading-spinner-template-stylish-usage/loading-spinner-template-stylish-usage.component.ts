import { Component } from '@angular/core';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-loading-spinner-template-stylish-usage',
  templateUrl: './loading-spinner-template-stylish-usage.component.html'
})
export class LoadingSpinnerTemplateStylishUsageComponent {
  public items: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    setTimeout(() => {
      this.items = this.dataFetchService.fetchData();
    }, 5000);
  }
}
