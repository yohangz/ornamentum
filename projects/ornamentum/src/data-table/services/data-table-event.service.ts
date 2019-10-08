import { EventEmitter, Injectable } from '@angular/core';

import { ReplaySubject } from 'rxjs';

import { DataTableHeaderClickEventArgs } from '../models/data-table-header-click-event-args.model';
import { DataTableRow } from '../models/data-table-row.model';
import { DataTableRowClickEventArgs } from '../models/data-table-row-click-event-args.model';
import { DataTableDoubleClickEventArgs } from '../models/data-table-double-click-event-args.model';
import { DataTableCellBindEventArgs } from '../models/data-table-cell-bind-event-args.model';
import { DataTableCellClickEventArgs } from '../models/data-table-cell-click-event-args.model';

import { DataFetchMode } from '../models/data-fetch-mode.enum';

import { DataTableComponent } from '../components/data-table/data-table.component';
import { DataTableColumnComponent } from '../components/data-table-column/data-table-column.component';

/**
 * Data table event state service; Manage all internal data tale event streams.
 */
@Injectable()
export class DataTableEventStateService {
  public allRowSelectChangeStream = new EventEmitter<boolean>();
  public dataFetchStream = new EventEmitter<DataFetchMode>();
  public headerClickStream = new EventEmitter<DataTableHeaderClickEventArgs>();
  public rowBindStream = new EventEmitter<DataTableRow<any>>();
  public rowClickStream = new EventEmitter<DataTableRowClickEventArgs<any>>();
  public rowDoubleClickStream = new EventEmitter<DataTableDoubleClickEventArgs<any>>();
  public rowSelectChangeStream = new EventEmitter<any | any[]>();
  public cellBindStream = new EventEmitter<DataTableCellBindEventArgs<any>>();
  public cellClickStream = new EventEmitter<DataTableCellClickEventArgs<any>>();
  public initStream = new EventEmitter<DataTableComponent>();
  public dataBoundStream = new EventEmitter<void>();
  public columnBind = new EventEmitter<DataTableColumnComponent>();
  public fetchFilterOptionsStream = new ReplaySubject<boolean>(1);
  public staticDataSourceStream = new ReplaySubject<any[]>(1);
}
