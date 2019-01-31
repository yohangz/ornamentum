import { Component } from '@angular/core';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-select-track-by-usage',
  templateUrl: './select-track-by-usage.component.html',
  styleUrls: ['../../data-table-row-selection.component.scss']
})
export class SelectTrackByUsageComponent {
  public items: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchStaticData();
  }
}
