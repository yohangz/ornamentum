import { Component } from '@angular/core';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-events-trigger-select-change-on-init-usage',
  templateUrl: './events-trigger-select-change-on-init-usage.component.html',
  styleUrls: ['../../dropdown-events.component.scss']
})
export class EventsTriggerSelectChangeOnInitUsageComponent {
  public items: ExampleData[];
  public selectChangeEventData: string = null;

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchData();
  }

  public onSelectChange(selectedData: ExampleData | ExampleData[]) {
    this.selectChangeEventData = 'Select change event is triggered on dropdown init';
  }
}
