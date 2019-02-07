import { Component } from '@angular/core';

import { DataTableCellClickEventArgs } from 'ornamentum';

import { ExampleData } from 'helper-models';

import { DataFetchService } from 'helper-services';

@Component({
  selector: 'app-events-cell-click-usage',
  templateUrl: './events-cell-click-usage.component.html',
  styleUrls: ['../../data-table-events.component.scss']
})
export class EventsCellClickUsageComponent {
  public items: ExampleData[];

  public cellClickEventData: string[] = [];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchStaticData();
  }

  public onCellClick(cellClickEventArgs: DataTableCellClickEventArgs<any>): void {
    this.cellClickEventData.push(`Selected Column is ${cellClickEventArgs.column.title} & Row ID is - ${cellClickEventArgs.row.item.id}`);
  }
}
