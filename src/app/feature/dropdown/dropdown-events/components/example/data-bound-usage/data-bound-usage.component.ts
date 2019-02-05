import { Component } from '@angular/core';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-data-bound-usage',
  templateUrl: './data-bound-usage.component.html',
  styleUrls: ['../../dropdown-events.component.scss']
})
export class DataBoundUsageComponent {
  public items: ExampleData[];
  public dataBoundEventData: string = null;

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchStaticData();
  }

  public onDataBound(): void {
    this.dataBoundEventData = 'Data bound event is called';
  }
}
