import { Component } from '@angular/core';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-events-select-change-usage',
  templateUrl: './events-select-change-usage.component.html',
  styleUrls: ['../../dropdown-events.component.scss']
})
export class EventsSelectChangeUsageComponent {
  public items: ExampleData[];
  public selectChangeEventData: string[] = [];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchStaticData();
  }

  public onSelectChange(selectedData: ExampleData | ExampleData[]): void {
    // if selectTrackBy property is specified, the selected item id or ids will be passed as a parameter to this method.
    this.selectChangeEventData.push(JSON.stringify(selectedData));
  }
}
