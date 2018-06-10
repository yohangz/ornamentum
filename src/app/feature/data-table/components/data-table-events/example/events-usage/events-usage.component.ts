import { Component, OnInit } from '@angular/core';

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

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { data } from './events-usage.data';

@Component({
  selector: 'app-events-usage',
  templateUrl: './events-usage.component.html'
})
export class EventsUsageComponent implements OnInit{
  public DataTableSelectMode = DataTableSelectMode;

  public items: Observable<any>;

  constructor() {
    this.items = of(data);
  }

  public ngOnInit(){
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
