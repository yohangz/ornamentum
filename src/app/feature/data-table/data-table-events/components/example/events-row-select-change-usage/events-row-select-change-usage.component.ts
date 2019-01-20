import { Component } from '@angular/core';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-events-row-select-change-usage',
  templateUrl: './events-row-select-change-usage.component.html',
  styleUrls: ['../../data-table-events.component.scss']
})
export class EventsRowSelectChangeUsageComponent {
  public items: ExampleData[];

  public rowSelectChangeEventData: ExampleData | ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchStaticData();
  }

  public onRowSelectChange(selectedData: ExampleData | ExampleData[]): void {
    this.rowSelectChangeEventData = selectedData;
  }
}
