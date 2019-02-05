import { Component } from '@angular/core';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-selected-option-usage',
  templateUrl: './selected-option-usage.component.html'
})
export class SelectedOptionUsageComponent {
  public items: ExampleData[];
  public selectedOption: ExampleData;

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchStaticData();
    this.selectedOption = this.items[1];
  }
}
