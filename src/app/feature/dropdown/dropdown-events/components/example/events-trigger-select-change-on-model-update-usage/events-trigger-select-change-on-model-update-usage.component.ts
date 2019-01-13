import { Component } from '@angular/core';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-events-trigger-select-change-on-model-update-usage',
  templateUrl: './events-trigger-select-change-on-model-update-usage.component.html',
  styleUrls: ['../../dropdown-events.component.scss']
})
export class EventsTriggerSelectChangeOnModelUpdateUsageComponent {
  public items: ExampleData[];
  public selectChangeOnModelUpdateEventData: string = null;

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchData();
  }
}
