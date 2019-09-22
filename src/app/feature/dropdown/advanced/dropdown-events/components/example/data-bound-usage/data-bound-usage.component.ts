import { Component } from '@angular/core';

import { ExampleData } from 'helper-models';

import { DataFetchService } from 'helper-services';

@Component({
  selector: 'app-data-bound-usage',
  templateUrl: './data-bound-usage.component.html',
  styleUrls: ['../../dropdown-events.component.scss']
})
export class DataBoundUsageComponent {
  public options: ExampleData[];
  public dataBoundEventData: string = null;

  constructor(private dataFetchService: DataFetchService) {
    this.options = this.dataFetchService.fetchStaticData();
  }

  public onDataBound(): void {
    this.dataBoundEventData = 'Data bound event is called';
  }
}
