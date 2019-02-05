import { Component } from '@angular/core';

import { ExampleData } from 'helper-models';

import { DataFetchService } from 'helper-services';

@Component({
  selector: 'app-item-selection-usage',
  templateUrl: './item-selection-usage.component.html',
  styleUrls: ['../../dropdown-item-selection.component.scss']
})
export class ItemSelectionUsageComponent {
  public items: ExampleData[];
  public selectedOptions: ExampleData[];
  public selectedItems: any[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchStaticData();
    this.selectedOptions = this.items.slice(5, 8);
  }

  public onSelectChange(event: ExampleData[]): void {
    this.selectedItems = event.map((exampleData: ExampleData) => {
      return exampleData.productType;
    });
  }
}
