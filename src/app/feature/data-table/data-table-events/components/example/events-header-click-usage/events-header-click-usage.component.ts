import { Component } from '@angular/core';

import { DataTableHeaderClickEventArgs } from '../../../../../../../../projects/ornamentum/src';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

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
