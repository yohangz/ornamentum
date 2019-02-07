import { Component } from '@angular/core';

import { DataTableRowClickEventArgs } from 'ornamentum';

import { ExampleData } from 'helper-models';

import { DataFetchService } from 'helper-services';

@Component({
  selector: 'app-events-row-click-usage',
  templateUrl: './events-row-click-usage.component.html',
  styleUrls: ['../../data-table-events.component.scss']
})
export class EventsRowClickUsageComponent {
  public items: ExampleData[];
  public rowClickEventData: string[] = [];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchStaticData();
  }

  public onRowClick(clickEventArgs: DataTableRowClickEventArgs<any>): void {
    this.rowClickEventData.push(`Single click event perform on row ID - ${clickEventArgs.row.item.id}`);
  }
}
