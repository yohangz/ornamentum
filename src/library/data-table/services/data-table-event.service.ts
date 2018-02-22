import { EventEmitter, Injectable } from '@angular/core';
import { HeaderClickEventArgs } from '../models/header-click-event-args.model';
import { DataRow } from '../models/data-row.model';
import { RowClickEventArgs } from '../models/row-click-event-args.model';
import { DoubleClickEventArgs } from '../models/double-click-event-args.model';
import { CellBindEventArgs } from '../models/cell-bind-event-args.model';
import { CellClickEventArgs } from '../models/cell-click-event-args.model';
import { DataTableComponent } from '../components/data-table/data-table.component';
import { DataTableParams } from '../models/data-table-params.model';

@Injectable()
export class DataTableEventStateService {
  public allRowSelectChangeStream = new EventEmitter<boolean>();
  public dataFetchStream = new EventEmitter<boolean>();
  public headerClickStream = new EventEmitter<HeaderClickEventArgs>();
  public rowBind = new EventEmitter<DataRow>();
  public rowClick = new EventEmitter<RowClickEventArgs>();
  public rowDoubleClick = new EventEmitter<DoubleClickEventArgs>();
  public rowSelectChangeStream = new EventEmitter<any|any[]>();
  public cellBind = new EventEmitter<CellBindEventArgs>();
  public cellClick = new EventEmitter<CellClickEventArgs>();
  public init = new EventEmitter<DataTableComponent>();
  public dataLoad = new EventEmitter<DataTableParams>();
  public refresh = new EventEmitter<DataTableParams>();
}
