import { Component } from '@angular/core';

import { DataTableRow } from '../../../../../../../../projects/ornamentum/src';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-events-row-bind-usage',
  templateUrl: './events-row-bind-usage.component.html',
  styleUrls: ['../../data-table-events.component.scss']
})
export class EventsRowBindUsageComponent {
  public items: ExampleData[];

  public rowBindEventData: string[] = [];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchStaticData();
  }

  public onRowBind(dataRow: DataTableRow<ExampleData>): void {
    this.rowBindEventData.push(`Row bind event is called for row ID - ${dataRow.item.id}`);
  }
}
