import { Component } from '@angular/core';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';
import {
  DataTableCellBindEventArgs,
  DataTableCellClickEventArgs,
  DataTableColumnComponent, DataTableComponent,
  DataTableDoubleClickEventArgs,
  DataTableHeaderClickEventArgs,
  DataTableRow, DataTableRowClickEventArgs
} from '../../../../../../../../projects/ornamentum/src';

@Component({
  selector: 'app-events-usage',
  templateUrl: './events-usage.component.html',
  styleUrls: ['../../data-table-events.component.scss']
})
export class EventsUsageComponent {
  public items: ExampleData[];
  public allEventsData: string[] = [];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchData();
  }

  public onDataTableInit(dataTable: DataTableComponent): void {
    this.allEventsData.push('Data table init event is called');
  }

  public onAllRowSelectChange(allRowSelectedChanged: boolean): void {
    this.allEventsData.push(`Select All Rows Checkbox Status: ${allRowSelectedChanged}`);
  }

  public onRowBind(dataRow: DataTableRow<ExampleData>): void {
    this.allEventsData.push(`Row bind event is called for row ID - ${dataRow.item.id}`);
  }

  public onRowSelectChange(selectedData: ExampleData | ExampleData[]): void {
    this.allEventsData.push(JSON.stringify(selectedData));
  }

  public onCellBind(cellBindEventArgs: DataTableCellBindEventArgs<any>): void {
    this.allEventsData.push(`Cell bind event is called for row ID - ${cellBindEventArgs.row.item.id}`);
  }

  public onCellClick(cellClickEventArgs: DataTableCellClickEventArgs<any>): void {
    this.allEventsData.push(`Selected Column is ${cellClickEventArgs.column.title} & Row ID is - ${cellClickEventArgs.row.item.id}`);
  }

  public onColumnBind(dataTableColumnComponent: DataTableColumnComponent): void {
    this.allEventsData.push(`Column bind event is called for column - ${dataTableColumnComponent.title}`);
  }

  public onDataBound(): void {
    this.allEventsData.push('Data bound is called');
  }

  public onHeaderClick(headerClickEventArgs: DataTableHeaderClickEventArgs): void {
    this.allEventsData.push(`${headerClickEventArgs.column.title} column header clicked`);
  }

  public onRowClick(clickEventArgs: DataTableRowClickEventArgs<any>): void {
    this.allEventsData.push(`Single clicked perform on row ID - ${clickEventArgs.row.item.id}`);
  }

  public onRowDoubleClick(doubleClickEventArgs: DataTableDoubleClickEventArgs<any>): void {
    this.allEventsData.push(`Double clicked perform on row ID - ${doubleClickEventArgs.row.item.id}`);
  }
}
