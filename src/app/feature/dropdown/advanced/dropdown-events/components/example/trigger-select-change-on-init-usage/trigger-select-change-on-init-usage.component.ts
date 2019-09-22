import { Component } from '@angular/core';

import { ExampleData } from 'helper-models';

import { DataFetchService } from 'helper-services';

@Component({
  selector: 'app-trigger-select-change-on-init-usage',
  templateUrl: './trigger-select-change-on-init-usage.component.html',
  styleUrls: ['../../dropdown-events.component.scss']
})
export class TriggerSelectChangeOnInitUsageComponent {
  public options: ExampleData[];
  public selectChangeEventData: string = null;

  constructor(private dataFetchService: DataFetchService) {
    this.options = this.dataFetchService.fetchStaticData();
  }

  public onSelectChange(selectedData: ExampleData | ExampleData[]) {
    this.selectChangeEventData = 'Select change event is triggered on dropdown init';
  }
}
