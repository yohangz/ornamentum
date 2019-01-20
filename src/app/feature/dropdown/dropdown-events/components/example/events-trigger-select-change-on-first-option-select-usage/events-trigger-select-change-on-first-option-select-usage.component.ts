import { Component } from '@angular/core';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-events-trigger-select-change-on-first-option-select-usage',
  templateUrl: './events-trigger-select-change-on-first-option-select-usage.component.html',
  styleUrls: ['../../dropdown-events.component.scss']
})
export class EventsTriggerSelectChangeOnFirstOptionSelectUsageComponent {
  public items: ExampleData[];
  public selectChangeEventData: ExampleData | ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchStaticData();
  }

  public onSelectChange(selectedData: ExampleData | ExampleData []) {
    this.selectChangeEventData = selectedData;
  }
}
