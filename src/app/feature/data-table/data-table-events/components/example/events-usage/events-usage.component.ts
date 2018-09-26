import { Component } from '@angular/core';

import {
  DataTableComponent,
  DataTableCellBindEventArgs,
  DataTableCellClickEventArgs,
  DataTableColumnComponent,
  DataTableDoubleClickEventArgs,
  DataTableHeaderClickEventArgs,
  DataTableRowClickEventArgs,
  DataTableRow
} from 'ornamentum';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-events-usage',
  templateUrl: './events-usage.component.html'
})
export class EventsUsageComponent {

  public items: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchData();
  }

  public onDataTableInit(dataTable: DataTableComponent): void {
    // goes your implementation
  }

  public onAllRowSelectChange(allRowSelectedChanged: boolean): void {
    // goes your implementation
  }

  public onRowBind(dataRow: DataTableRow<any>): void {
    // goes your implementation
  }

  public onRowSelectChange(selectedData: any | any[]): void {
    // if selectTrackBy property is specified, the selected row id or ids will be passed as a parameter to this method.
    // goes your implementation
  }

  public onCellBind(cellBindEventArgs: DataTableCellBindEventArgs<any>): void {
    // goes your implementation
  }

  public onCellClick(cellClickEventArgs: DataTableCellClickEventArgs<any>): void {
    // goes your implementation
  }

  public onColumnBind(dataTableColumnComponent: DataTableColumnComponent): void {
    // goes your implementation
  }

  public onDataBound(): void {
    // goes your implementation
  }

  public onHeaderClick(headerClickEventArgs: DataTableHeaderClickEventArgs): void {
    // goes your implementation
  }

  public onRowClick(clickEventArgs: DataTableRowClickEventArgs<any>): void {
    // goes your implementation
  }

  public onRowDoubleClick(doubleClickEventArgs: DataTableDoubleClickEventArgs<any>): void {
    // goes your implementation
  }
}
