import { Component } from '@angular/core';

import { ExampleData } from 'helper-models';

import { DataFetchService } from 'helper-services';

@Component({
  selector: 'app-events-data-bound-usage',
  templateUrl: './events-data-bound-usage.component.html',
  styleUrls: ['../../data-table-events.component.scss']
})
export class EventsDataBoundUsageComponent {
  public items: ExampleData[];
  public dataBoundEventData: string = null;

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchStaticData();
  }

  public onDataBound(): void {
    this.dataBoundEventData = 'Data bound event is called';
  }
}
