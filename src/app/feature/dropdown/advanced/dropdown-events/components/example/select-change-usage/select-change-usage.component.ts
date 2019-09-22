import { Component } from '@angular/core';

import { ExampleData } from 'helper-models';

import { DataFetchService } from 'helper-services';

@Component({
  selector: 'app-select-change-usage',
  templateUrl: './select-change-usage.component.html',
  styleUrls: ['../../dropdown-events.component.scss']
})
export class SelectChangeUsageComponent {
  public options: ExampleData[];
  public selectChangeEventData: string[] = [];

  constructor(private dataFetchService: DataFetchService) {
    this.options = this.dataFetchService.fetchStaticData();
  }

  public onSelectChange(selectedData: ExampleData | ExampleData[]): void {
    // if selectTrackBy property is specified, the selected option id or ids will be passed as a parameter to this method.
    this.selectChangeEventData.push(JSON.stringify(selectedData));
  }
}
