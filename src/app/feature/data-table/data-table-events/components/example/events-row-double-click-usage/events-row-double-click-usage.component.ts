import { Component } from '@angular/core';

import { DataTableDoubleClickEventArgs } from '../../../../../../../../projects/ornamentum/src';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-events-row-double-click-usage',
  templateUrl: './events-row-double-click-usage.component.html',
  styleUrls: ['../../data-table-events.component.scss']
})
export class EventsRowDoubleClickUsageComponent {
  public items: ExampleData[];
  public rowDoubleClickEventData: string = null;

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchStaticData();
  }

  public onRowDoubleClick(doubleClickEventArgs: DataTableDoubleClickEventArgs<any>): void {
    this.rowDoubleClickEventData = `Double click event perform on row ID - ${doubleClickEventArgs.row.item.id}`;
  }
}
