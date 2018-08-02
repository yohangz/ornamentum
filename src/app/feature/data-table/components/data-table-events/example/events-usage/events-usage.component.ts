import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import {
  DataTableComponent,
  DataTableCellBindEventArgs,
  DataTableCellClickEventArgs,
  DataTableColumnComponent,
  DataTableDoubleClickEventArgs,
  DataTableHeaderClickEventArgs,
  DataTableRowClickEventArgs,
  DataTableSelectMode,
  DataTableRow
} from 'ornamentum';

import { data } from './events-usage.data';

@Component({
  selector: 'app-events-usage',
  templateUrl: './events-usage.component.html'
})
export class EventsUsageComponent {
  public DataTableSelectMode = DataTableSelectMode;

  public items: Observable<any>;

  constructor() {
    this.items = of(data);
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
