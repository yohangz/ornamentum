import { Component } from '@angular/core';

import { ExampleData } from 'helper-models';

import { DataFetchService } from 'helper-services';

@Component({
  selector: 'app-trigger-select-change-on-model-update-usage',
  templateUrl: './trigger-select-change-on-model-update-usage.component.html',
  styleUrls: ['../../dropdown-events.component.scss']
})
export class TriggerSelectChangeOnModelUpdateUsageComponent {
  public options: ExampleData[];
  public selectChangeOnModelUpdateEventData: string = null;

  constructor(private dataFetchService: DataFetchService) {
    this.options = this.dataFetchService.fetchStaticData();
  }
}
