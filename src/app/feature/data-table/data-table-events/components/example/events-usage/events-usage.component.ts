import { AfterViewInit, ChangeDetectorRef, Component, OnChanges, OnInit } from '@angular/core';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';
import {
  DataTableCellBindEventArgs,
  DataTableCellClickEventArgs,
  DataTableColumnComponent,
  DataTableComponent,
  DataTableDoubleClickEventArgs,
  DataTableHeaderClickEventArgs,
  DataTableRow,
  DataTableRowClickEventArgs
} from '../../../../../../../../projects/ornamentum/src';

@Component({
  selector: 'app-events-usage',
  templateUrl: './events-usage.component.html',
  styleUrls: ['../../data-table-events.component.scss']
})
export class EventsUsageComponent implements AfterViewInit {
  public items: ExampleData[];
  public allEventsData: string[] = [];

  constructor(private dataFetchService: DataFetchService, private cd: ChangeDetectorRef) {
    this.items = this.dataFetchService.fetchStaticData();
  }

  public ngAfterViewInit(): void {
    this.cd.detectChanges();
  }

  public onDataTableInit(dataTable: DataTableComponent): void {
    this.allEventsData.push('[INIT] event is called');
  }

  public onAllRowSelectChange(allRowSelectedChanged: boolean): void {
    this.allEventsData.push(`[SELECT ALL] Checkbox Status: ${allRowSelectedChanged}`);
  }

  public onRowBind(dataRow: DataTableRow<ExampleData>): void {
    this.allEventsData.push(`[ROW BIND] event is called for row ID - ${dataRow.item.id}`);
  }

  public onRowSelectChange(selectedData: ExampleData | ExampleData[]): void {
    this.allEventsData.push(`[SELECTED ROW VALUES] ${JSON.stringify(selectedData)}`);
  }

  public onCellBind(cellBindEventArgs: DataTableCellBindEventArgs<any>): void {
    this.allEventsData.push(`[CELL BIND] event is called for row ID - ${cellBindEventArgs.row.item.id}`);
  }

  public onCellClick(cellClickEventArgs: DataTableCellClickEventArgs<any>): void {
    this.allEventsData.push(`[SELECTED COLUMN] is ${cellClickEventArgs.column.title} & [ROW ID] is - ${cellClickEventArgs.row.item.id}`);
  }

  public onColumnBind(dataTableColumnComponent: DataTableColumnComponent): void {
    this.allEventsData.push(`[COLUMN BIND] event is called for column - ${dataTableColumnComponent.title}`);
  }

  public onDataBound(): void {
    this.allEventsData.push('[DATA BOUND] event is called');
  }

  public onHeaderClick(headerClickEventArgs: DataTableHeaderClickEventArgs): void {
    this.allEventsData.push(`[COLUMN HEADER] ${headerClickEventArgs.column.title} is clicked`);
  }

  public onRowClick(clickEventArgs: DataTableRowClickEventArgs<any>): void {
    this.allEventsData.push(`[SINGLE CLICK] perform on row ID - ${clickEventArgs.row.item.id}`);
  }

  public onRowDoubleClick(doubleClickEventArgs: DataTableDoubleClickEventArgs<any>): void {
    this.allEventsData.push(`[DOUBLE CLICK] perform on row ID - ${doubleClickEventArgs.row.item.id}`);
  }

  public getAllEventsData(): string[] {
    if (this.allEventsData.length) {
      return this.allEventsData.slice().reverse();
    }
  }
}
