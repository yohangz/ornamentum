import { Component, EventEmitter, Output } from '@angular/core';

import {
  DataTableCellBindEventArgs,
  DataTableCellClickEventArgs,
  DataTableColumnComponent,
  DataTableComponent,
  DataTableDoubleClickEventArgs,
  DataTableHeaderClickEventArgs,
  DataTableRow,
  DataTableRowClickEventArgs
} from 'ornamentum';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-events-usage',
  templateUrl: './events-usage.component.html'
})
export class EventsUsageComponent {
  public rowData: string[] = [];
  public cellData: string[] = [];
  public columnData: string[] = [];

  @Output()
  public dataTableInit: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  public allRowSelectChange: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  public rowBind: EventEmitter<string[]> = new EventEmitter<string[]>();

  @Output()
  public rowSelectChange: EventEmitter<ExampleData | ExampleData[]> = new EventEmitter<ExampleData | ExampleData[]>();

  @Output()
  public cellBind: EventEmitter<string[]> = new EventEmitter<string[]>();

  @Output()
  public cellClick: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  public columnBind: EventEmitter<string[]> = new EventEmitter<string[]>();

  @Output()
  public dataBound: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  public headerClick: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  public rowClick: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  public rowDoubleClick: EventEmitter<string> = new EventEmitter<string>();

  public items: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchData();
  }

  public onDataTableInit(dataTable: DataTableComponent): void {
    this.dataTableInit.emit('Data table init event is called');
  }

  public onAllRowSelectChange(allRowSelectedChanged: boolean): void {
    this.allRowSelectChange.emit(`Is select all check box clicked: ${allRowSelectedChanged}`);
  }

  public onRowBind(dataRow: DataTableRow<ExampleData>): void {
    this.rowData.push(`row bind event is called for row id => ${dataRow.item.id}`);
    this.rowBind.emit(this.rowData);
  }

  public onRowSelectChange(selectedData: ExampleData | ExampleData[]): void {
    this.rowSelectChange.emit(selectedData);
  }

  public onCellBind(cellBindEventArgs: DataTableCellBindEventArgs<any>): void {
    this.cellData.push(`cell bind event is called for row id => ${cellBindEventArgs.row.item.id}`);
    this.cellBind.emit(this.cellData);
  }

  public onCellClick(cellClickEventArgs: DataTableCellClickEventArgs<any>): void {
    const cellDetail = `Cell Detail: Column => ${cellClickEventArgs.column.title} & Row ID => ${cellClickEventArgs.row.item.id}`;
    this.cellClick.emit(cellDetail);
  }

  public onColumnBind(dataTableColumnComponent: DataTableColumnComponent): void {
    this.columnData.push(`column bind event is called for column => ${dataTableColumnComponent.title}`);
    this.columnBind.emit(this.columnData);
  }

  public onDataBound(): void {
    this.dataBound.emit('Data bound is called');
  }

  public onHeaderClick(headerClickEventArgs: DataTableHeaderClickEventArgs): void {
    this.headerClick.emit(`${headerClickEventArgs.column.title} column header clicked`);
  }

  public onRowClick(clickEventArgs: DataTableRowClickEventArgs<any>): void {
    this.rowClick.emit(`Clicked row ID: ${clickEventArgs.row.item.id}`);
  }

  public onRowDoubleClick(doubleClickEventArgs: DataTableDoubleClickEventArgs<any>): void {
    this.rowDoubleClick.emit(`Double clicked row ID: ${doubleClickEventArgs.row.item.id}`);
  }
}
