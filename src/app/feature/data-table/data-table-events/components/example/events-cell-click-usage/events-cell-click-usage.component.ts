import { Component } from '@angular/core';

import { DataTableCellClickEventArgs } from '../../../../../../../../projects/ornamentum/src';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-events-cell-click-usage',
  templateUrl: './events-cell-click-usage.component.html',
  styleUrls: ['../../data-table-events.component.scss']
})
export class EventsCellClickUsageComponent {
  public items: ExampleData[];

  public cellClickEventData: string[] = [];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchData();
  }

  public onCellClick(cellClickEventArgs: DataTableCellClickEventArgs<any>): void {
    this.cellClickEventData.push(`Selected Column is ${cellClickEventArgs.column.title} & Row ID is - ${cellClickEventArgs.row.item.id}`);
  }
}
