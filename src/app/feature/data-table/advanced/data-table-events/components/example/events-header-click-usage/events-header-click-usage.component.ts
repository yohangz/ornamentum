import { Component } from '@angular/core';

import { DataTableHeaderClickEventArgs } from 'ornamentum';

import { ExampleData } from 'helper-models';

import { DataFetchService } from 'helper-services';

@Component({
  selector: 'app-events-header-click-usage',
  templateUrl: './events-header-click-usage.component.html',
  styleUrls: ['../../data-table-events.component.scss']
})
export class EventsHeaderClickUsageComponent {
  public items: ExampleData[];
  public headerClickEventData: string[] = [];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchStaticData();
  }

  public onHeaderClick(headerClickEventArgs: DataTableHeaderClickEventArgs): void {
    this.headerClickEventData.push(`${headerClickEventArgs.column.title} column header clicked`);
  }
}
