import { Component } from '@angular/core';

import { demoSnippet, eventsUsage } from './data-table-events.list';

import { ExampleData } from '../../../../shared/models';

@Component({
  selector: 'app-data-table-events-component',
  templateUrl: './data-table-events.component.html',
  styleUrls: ['./data-table-events.component.scss']
})
export class DataTableEventsComponent {
  public eventsUsage = eventsUsage;
  public demoSnippet = demoSnippet;

  public dataTableInitData: string;
  public allRowSelectChangeEventData = '// click on the row select all check box to see the output';
  public rowBindEventData: string[] = [];
  public rowSelectChangeEventData: ExampleData | ExampleData[];
  public cellBindEventData: string[] = [];
  public cellClickEventData = '// click on the any cell to see the output';
  public columnBindEventData: string[] = [];
  public dataBoundEventData: string;
  public headerClickEventData = '// click on the any column header to see the output';
  public rowClickData = '// click on the any row to see the output';
  public rowDoubleClickData = '// double click on the any row to see the output';

  public onDataTableInit(dataTableInitData: string): void {
    setTimeout(() => {
      this.dataTableInitData = dataTableInitData;
    });
  }

  public onAllRowSelectChange(allRowSelectedChanged: string): void {
    this.allRowSelectChangeEventData = allRowSelectedChanged;
  }

  public onRowBind(rowBindEventData: string[]): void {
    this.rowBindEventData = [...rowBindEventData];
  }

  public onRowSelectChange(selectedData: ExampleData | ExampleData[]): void {
    this.rowSelectChangeEventData = selectedData;
  }

  public onCellBind(cellBindEventData: string[]): void {
    this.cellBindEventData = [...cellBindEventData];
  }

  public onCellClick(cellClickEventData: string): void {
    this.cellClickEventData = cellClickEventData;
  }

  public onColumnBind(columnData: string[]): void {
    setTimeout(() => {
      this.columnBindEventData = [...columnData];
    });
  }

  public onDataBound(dataBoundEventData: string): void {
    this.dataBoundEventData = dataBoundEventData;
  }

  public onHeaderClick(headerClickEventData: string): void {
    this.headerClickEventData = headerClickEventData;
  }

  public onRowClick(rowClickData: string): void {
    this.rowClickData = rowClickData;
  }

  public onRowDoubleClick(rowDoubleClickData: string): void {
    this.rowDoubleClickData = rowDoubleClickData;
  }
}
