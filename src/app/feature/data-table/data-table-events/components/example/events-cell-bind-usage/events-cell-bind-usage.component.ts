import { Component } from '@angular/core';

import { DataTableCellBindEventArgs } from '../../../../../../../../projects/ornamentum/src';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-events-cell-bind-usage',
  templateUrl: './events-cell-bind-usage.component.html',
  styleUrls: ['../../data-table-events.component.scss']
})
export class EventsCellBindUsageComponent {
  public items: ExampleData[];

  public cellBindEventData: string[] = [];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchData();
  }

  public onCellBind(cellBindEventArgs: DataTableCellBindEventArgs<any>): void {
    this.cellBindEventData.push(`Cell bind event is called for row ID - ${cellBindEventArgs.row.item.id}`);
  }
}
