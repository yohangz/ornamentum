import { Component } from '@angular/core';

import { ExampleData } from 'helper-models';

import { DataFetchService } from 'helper-services';

@Component({
  selector: 'app-trigger-select-change-on-first-option-select-usage',
  templateUrl: './trigger-select-change-on-first-option-select-usage.component.html',
  styleUrls: ['../../dropdown-events.component.scss']
})
export class TriggerSelectChangeOnFirstOptionSelectUsageComponent {
  public items: ExampleData[];
  public selectChangeEventData: ExampleData | ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchStaticData();
  }

  public onSelectChange(selectedData: ExampleData | ExampleData[]) {
    this.selectChangeEventData = selectedData;
  }
}
