import { Component } from '@angular/core';

import { DataTableRowClickEventArgs } from '../../../../../../../../projects/ornamentum/src';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-events-row-click-usage',
  templateUrl: './events-row-click-usage.component.html',
  styleUrls: ['../../data-table-events.component.scss']
})
export class EventsRowClickUsageComponent {
  public items: ExampleData[];
  public rowClickEventData: string = null;

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchStaticData();
  }

  public onRowClick(clickEventArgs: DataTableRowClickEventArgs<any>): void {
    this.rowClickEventData = `Single click event perform on row ID - ${clickEventArgs.row.item.id}`;
  }
}
