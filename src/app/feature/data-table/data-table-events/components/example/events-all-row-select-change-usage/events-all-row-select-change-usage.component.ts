import { Component } from '@angular/core';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-events-all-row-select-change-usage',
  templateUrl: './events-all-row-select-change-usage.component.html',
  styleUrls: ['../../data-table-events.component.scss']
})
export class EventsAllRowSelectChangeUsageComponent {
  public items: ExampleData[];

  public allRowSelectChangeEventData: string[] = [];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchStaticData();
  }

  public onAllRowSelectChange(allRowSelectedChanged: boolean): void {
    this.allRowSelectChangeEventData.push(`Select All Rows Checkbox Status: ${allRowSelectedChanged}`);
  }
}
