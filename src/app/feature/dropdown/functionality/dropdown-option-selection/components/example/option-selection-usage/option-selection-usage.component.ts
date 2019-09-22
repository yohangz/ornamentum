import { Component } from '@angular/core';

import { ExampleData } from 'helper-models';

import { DataFetchService } from 'helper-services';

@Component({
  selector: 'app-option-selection-usage',
  templateUrl: './option-selection-usage.component.html',
  styleUrls: ['../../dropdown-option-selection.component.scss']
})
export class OptionSelectionUsageComponent {
  public options: ExampleData[];
  public selectedOptions: ExampleData[];
  public selectedItems: any[];

  constructor(private dataFetchService: DataFetchService) {
    this.options = this.dataFetchService.fetchStaticData();
    this.selectedOptions = this.options.slice(5, 8);
  }

  public onSelectChange(event: ExampleData[]): void {
    this.selectedItems = event.map((exampleData: ExampleData) => {
      return exampleData.productType;
    });
  }
}
